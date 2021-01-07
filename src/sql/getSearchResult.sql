SELECT  product_count, 
		CEIL(product_count::decimal / ${perPage}) AS page_count,
		json_agg(t)                  AS product_masters
FROM 
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
	WHERE lower(name) like '%${query#}%' or lower(flavors) like '%${query#}%' or lower(brand_name_ja) like '%${query#}%' or lower(brand_name_en) like '%${query#}%'  
	ORDER BY avg_total_rating DESC, review_count DESC
	LIMIT ${perPage} OFFSET (${currentPage} - 1) * ${perPage}
) t
CROSS JOIN (
	SELECT COUNT(*) AS product_count
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
	WHERE lower(name) like '%${query#}%' 
	or lower(flavors) like '%${query#}%' 
	or lower(brand_name_ja) like '%${query#}%' 
	or lower(brand_name_en) like '%${query#}%'
) as count
GROUP BY product_count