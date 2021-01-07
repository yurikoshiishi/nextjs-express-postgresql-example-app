UPDATE reviews
SET thumbsup_count = thumbsup_count + 1
WHERE review_id = $1;