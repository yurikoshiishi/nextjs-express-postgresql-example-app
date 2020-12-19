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
      case 'GET': {
        const products = await db.one('SELECT * FROM products');
        res.status(200).json(products);
        return;
      }
      default: {
      }
    }
  } catch (e) {
    console.error(e);
    res.status(500).end();
  }
};
