SELECT  *
FROM reviews
ORDER BY created_at desc
LIMIT ${perPage} offset (${currentPage} - 1 ) * ${perPage}