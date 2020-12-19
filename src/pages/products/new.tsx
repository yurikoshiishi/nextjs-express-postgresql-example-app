import React from 'react';
import Link from 'next/link';

interface CreateProductProps {}

const CreateProduct: React.FC<CreateProductProps> = ({}) => {
  return (
    <div>
      <Link href="/">Back to Top</Link>
    </div>
  );
};

export default CreateProduct;
