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
${condition:raw}