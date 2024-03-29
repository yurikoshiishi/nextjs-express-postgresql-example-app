WITH products AS (
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
LEFT JOIN 
(
	SELECT  product_master_id 
	       ,COUNT(*)                            AS review_count 
	       ,ROUND(AVG(taste_rating)::numeric,1) AS avg_taste_rating 
	       ,ROUND(AVG(mix_rating)::numeric,1)   AS avg_mix_rating 
	       ,ROUND(AVG(total_rating)::numeric,1) AS avg_total_rating
	FROM reviews
	GROUP BY  product_master_id 
) AS reviews USING (product_master_id)
)

SELECT most_reviewed, top_rated FROM
(
	SELECT json_agg(mr) AS most_reviewed
	FROM 
	(
		SELECT  *
		FROM products
		ORDER BY review_count DESC NULLS LAST
		LIMIT ${numberOfItems}
	) mr
) AS mr,
(
	SELECT json_agg(tr) AS top_rated
	FROM 
	(
		SELECT  *
		FROM products
		ORDER BY avg_total_rating DESC NULLS LAST
		LIMIT ${numberOfItems}
	) tr
) AS tr