SELECT  brands
       ,products
FROM 
(
	SELECT  json_agg(product_master_id) AS products
	FROM product_masters 
) AS product_masters, (
SELECT  json_agg(brand_id) AS brands
FROM brands ) AS brands