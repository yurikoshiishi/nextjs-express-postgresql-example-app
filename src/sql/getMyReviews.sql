SELECT  json_agg(t) AS reviews 
       ,review_page_count
FROM 
(
	SELECT  *
	FROM reviews
	JOIN 
	(
		SELECT  brand_id
		       ,product_master_id
		       ,brand_name_ja
		       ,brand_name_en
		       ,name
		FROM product_masters
		JOIN brands USING 
		(brand_id
		) 
	) AS product_data USING (product_master_id)
	JOIN 
	(
		SELECT  product_variation_id
		       ,flavor
		FROM product_variations 
	) AS product_variation_data USING (product_variation_id) ${userCondition:raw}
	ORDER BY reviews.created_at desc
	LIMIT ${perPage} offset (${currentPage} - 1 ) * ${perPage} 
) t
CROSS JOIN 
(
	SELECT  CEIL(COUNT(*)::decimal / ${perPage}) AS review_page_count
	FROM REVIEWS ${userCondition:raw} 
) AS count
GROUP BY  review_page_count