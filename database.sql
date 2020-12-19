CREATE EXTENSION "uuid-ossp";

CREATE TABLE products (
    product_id UUID NOT NULL PRIMARY KEY,
    taste_rating INT NOT NULL,
    mix_rating INT NOT NULL,
    description VARCHAR(1000),
    CHECK (taste_rating BETWEEN 1 AND 5),
    CHECK (mix_rating BETWEEN 1 AND 5)
);

ALTER TABLE products ADD CONSTRAINT taste_rating CHECK (taste_rating BETWEEN 1 AND 5);
ALTER TABLE products ADD CONSTRAINT mix_rating CHECK (taste_rating BETWEEN 1 AND 5);

INSERT INTO products (product_id, taste_rating, mix_rating, description) VALUES(uuid_generate_v4(), 5, 5, '非常に美味しいプロテインです。');