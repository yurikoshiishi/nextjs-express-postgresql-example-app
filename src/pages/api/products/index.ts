import db from '../../utils/db';

export default async (req, res) => {
  try {
    // const {
    //   query: {id},
    // } = req;
    switch (req.method) {
      case 'POST': {
        const {taste_rating, mix_rating, description} = req;
        const res = await db.one(
          'INSERT INTO products(taste_rating, mix_rating, description) VALUES($1, $2, $3)',
          [taste_rating, mix_rating, description]
        );
        res.status(200).send(res);
        return;
      }
      default: {
        // const products = await db.any(
        //   'SELECT * FROM product_masters JOIN product_variations USING (product_master_id)'
        // );
        // const products = await db.any(
        //   'SELECT * FROM product_masters JOIN brands USING (brand_id)'
        // );
        const products = await db.any(
          `SELECT *
          FROM product_masters
          JOIN brands using (brand_id)
          JOIN (SELECT product_master_id, COUNT(*) as variation_count FROM product_variations GROUP BY product_master_id) AS counter
          ON product_masters.product_master_id = counter.product_master_id
          `
        );
        res.status(200).json(products);
        return;
      }
    }
  } catch (e) {
    console.error(e);
    res.status(500).end();
  }
};
