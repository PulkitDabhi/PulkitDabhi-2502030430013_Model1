function ProductDetails({ product, onAddToCart, onBack }) {
  return (
    <section className="page-section product-details-page">
      <button type="button" className="back-link" onClick={onBack}>
        ← Back to products
      </button>

      <div className="product-details-layout">
        <div className="product-visual large-visual" aria-hidden="true">
          {product.icon}
        </div>

        <div className="product-details-copy">
          <p className="eyebrow">{product.category}</p>
          <h2>{product.name}</h2>
          <p className="product-details-description">{product.fullDescription}</p>

          <div className="detail-highlights">
            {product.highlights.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>

          <div className="product-price-row">
            <span className="product-price">₹{product.price.toLocaleString()}</span>
            <span className="product-badge">{product.badge}</span>
          </div>

          <p className="product-note">{product.note}</p>

          <div className="product-actions details-actions">
            <button type="button" className="primary-btn" onClick={() => onAddToCart(product)}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
