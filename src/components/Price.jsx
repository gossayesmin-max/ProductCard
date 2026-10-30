import product from '../product';

function Price() {
  return (
    <h4 className="text-success">
      {product.price} DT
    </h4>
  );
}

export default Price;