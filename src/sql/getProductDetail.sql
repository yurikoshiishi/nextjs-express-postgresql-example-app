WITH product_master_data AS 
(
	SELECT  *
	FROM product_masters
	JOIN brands USING 
	(brand_id
	)
	JOIN 
	(
		SELECT  product_master_id
				,string_agg(flavor,',') AS flavors 
			   ,COUNT(*) AS variation_count
		FROM product_variations
		GROUP BY  product_master_id
	) AS variations
	USING (product_master_id)
	LEFT JOIN 
	(
		SELECT  product_master_id
			   ,COUNT(*)                            AS review_count
			   ,ROUND(AVG(taste_rating)::numeric,1) AS avg_taste_rating
			   ,ROUND(AVG(mix_rating)::numeric,1)   AS avg_mix_rating
			   ,ROUND(AVG(total_rating)::numeric,1) AS avg_total_rating
		FROM reviews
		GROUP BY  product_master_id
	) AS reviews
	USING (product_master_id)
)
,
requested_product_master AS (SELECT brand_id FROM product_masters WHERE product_master_id = ${product_master_id})

SELECT  *
	   ,CEIL(review_count::decimal / ${perPage}) AS review_page_count
FROM product_masters
-- get brand
JOIN 
(
	SELECT brand_id, brand_name_ja, brand_name_en
	FROM brands
) as brands
USING (brand_id)
-- get variations and number of variations 
JOIN 
(
	SELECT  product_master_id 
	       ,json_agg(product_variations) AS product_variations 
	       ,COUNT(*)                     AS variation_count
	FROM product_variations
	GROUP BY  product_master_id 
) AS variations
USING (product_master_id)

-- get review summary as well as total count
LEFT JOIN 
(
	SELECT  product_master_id 
	       ,COUNT(*)                            AS review_count 
	       ,json_build_object(5,COUNT(*) FILTER (WHERE total_rating = 5 ),4,COUNT(*) FILTER (WHERE total_rating = 4 ),3,COUNT(*) FILTER (WHERE total_rating = 3 ),2,COUNT(*) FILTER (WHERE total_rating = 2 ),1,COUNT(*) FILTER (WHERE total_rating = 1 )) AS review_summary 
	       ,ROUND(AVG(taste_rating)::numeric,1) AS avg_taste_rating 
	       ,ROUND(AVG(mix_rating)::numeric,1)   AS avg_mix_rating 
	       ,ROUND(AVG(total_rating)::numeric,1) AS avg_total_rating
	FROM reviews
	${variationCondition:raw}
	GROUP BY  product_master_id 
) AS reviews_status
USING (product_master_id)

-- get reviews for current page
LEFT JOIN 
(
	SELECT  product_master_id
	       ,json_agg(t) AS reviews
	FROM 
	(
		SELECT  *
		FROM reviews
		JOIN (SELECT product_variation_id, flavor, url_amazon, url_myprotein, url_iherb FROM product_variations) AS flavors
		USING (product_variation_id)
		WHERE product_master_id = ${product_master_id}
		${reviewCondition:raw}
		ORDER BY ${orderBy:name} DESC
		LIMIT ${perPage} OFFSET (${currentPage} - 1) * ${perPage}
	) t
	GROUP BY  product_master_id 
) AS reviews_page
USING (product_master_id)

-- get related products
CROSS JOIN 
(
	SELECT  json_agg(t) AS related_product_masters
	FROM 
	(
		SELECT  *
		FROM 
		( 
			(
				SELECT  *
				FROM product_master_data
				WHERE brand_id IN (SELECT brand_id FROM requested_product_master)
			)  
			UNION ALL
			(
				SELECT  *
				FROM product_master_data
				WHERE  brand_id NOT IN (SELECT brand_id FROM requested_product_master)
				LIMIT 20 
			) 
		) related_products
		WHERE product_master_id != ${product_master_id}
		ORDER BY brand_id = (SELECT brand_id FROM requested_product_master) DESC, avg_total_rating DESC, review_count DESC
		LIMIT 20 
	) t 
) related_products
WHERE product_master_id = ${product_master_id};  