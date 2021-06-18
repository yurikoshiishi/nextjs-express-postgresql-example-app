UPDATE reviews
SET thumbsup_count = GREATEST(0, thumbsup_count - 1)
WHERE review_id = ${review_id};