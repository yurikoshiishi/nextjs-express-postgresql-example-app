SELECT  *
FROM product_masters
JOIN brands USING 
(brand_id 
)
JOIN 
(
	SELECT  product_master_id 
	       ,string_agg(flavor,',') AS flavors 
	       ,COUNT(*)               AS variation_count
	FROM product_variations
	GROUP BY  product_master_id 
) AS variations USING (product_master_id)
JOIN 
(
	SELECT  product_master_id 
	       ,COUNT(*)                            AS review_count 
	       ,ROUND(AVG(taste_rating)::numeric,1) AS avg_taste_rating 
	       ,ROUND(AVG(mix_rating)::numeric,1)   AS avg_mix_rating 
	       ,ROUND(AVG(total_rating)::numeric,1) AS avg_total_rating
	FROM reviews
	GROUP BY  product_master_id 
) AS reviews USING (product_master_id)
JOIN 
(
	SELECT  product_master_id
	       ,json_agg(t) AS reviews
	FROM 
	(
		SELECT  *
		       ,row_number() over (partition by product_master_id) AS rn
		FROM reviews
		JOIN (SELECT product_variation_id, flavor, url_amazon, url_myprotein, url_iherb FROM product_variations) AS flavors
		USING (product_variation_id)
		ORDER BY total_rating DESC, thumbsup_count DESC, created_at DESC 
	) t
	WHERE rn < ${numberOfReviews} or rn = ${numberOfReviews} 
	GROUP BY  product_master_id 
) AS review USING (product_master_id)
ORDER BY ${orderBy:name} DESC
LIMIT ${perPage}