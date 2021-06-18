SELECT  *
FROM product_masters AS masters
JOIN brands USING 
(brand_id 
)
JOIN 
(
	SELECT  product_master_id 
	       ,json_agg(product_variations) AS product_variations 
	       ,COUNT(*)                     AS variation_count
	FROM product_variations
	GROUP BY  product_master_id 
) AS variations USING (product_master_id)
WHERE masters.product_master_id = ${product_master_id}; 