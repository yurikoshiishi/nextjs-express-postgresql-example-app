WITH products AS (
SELECT  *
FROM product_masters
-- get brand
JOIN brands USING 
(brand_id 
)
-- get flavors and number of variations
JOIN 
(
	SELECT  product_master_id 
	       ,string_agg(flavor,',') AS flavors 
	       ,COUNT(*)               AS variation_count
	FROM product_variations
	GROUP BY  product_master_id 
) AS variations USING (product_master_id)
-- get number of reviews and average ratings
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
-- get reviews
JOIN 
(
	SELECT  product_master_id, json_agg(t) AS reviews
	FROM 
	(
		SELECT *, row_number() over (partition by product_master_id) as rn FROM reviews
		ORDER BY total_rating DESC, thumbsup_count DESC, created_at DESC 
	) t
	WHERE rn < ${numberOfReviews} or rn = ${numberOfReviews}
	GROUP BY product_master_id
) AS review USING (product_master_id) 
)

SELECT most_reviewed, top_rated FROM
(
	SELECT json_agg(mr) AS most_reviewed
	FROM 
	(
		SELECT  *
		FROM products
		ORDER BY review_count DESC
		LIMIT ${numberOfItems}
	) mr
) AS mr,
(
	SELECT json_agg(tr) AS top_rated
	FROM 
	(
		SELECT  *
		FROM products
		ORDER BY avg_total_rating DESC
		LIMIT ${numberOfItems}
	) tr
) AS tr