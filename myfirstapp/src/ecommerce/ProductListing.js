import ProductCard from './ProductCard';

function ProductListing({ products, onViewDetails, onAddToCart }) {
  return (
    <section className="page-section" id="products">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Featured Collection</p>
          <h2>Electronics crafted for modern homes</h2>
        </div>
        <p>
          Browse our latest TVs, refrigerators, phones, and air conditioners with
          trusted warranties and fast delivery.
        </p>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onViewDetails={onViewDetails}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductListing;
