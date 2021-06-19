INSERT INTO reviews (review_id, product_master_id, product_variation_id, user_id, taste_rating, mix_rating,total_rating, description) VALUES (uuid_generate_v4(), ${product_master_id}, ${product_variation_id}, ${user_id}, ${taste_rating}, ${mix_rating}, ${total_rating}, ${description}); UPDATE product_masters

SET updated_at = NOW()
WHERE product_master_id = ${product_master_id}; 