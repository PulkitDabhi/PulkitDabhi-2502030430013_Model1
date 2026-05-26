function ProductCard({ product, onViewDetails, onAddToCart }) {
  return (
    <article className="product-card">
      <div className="product-visual" aria-hidden="true">
        {product.icon}
      </div>
      <div className="product-meta">
        <p className="product-category">{product.category}</p>
        <h3>{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-price-row">
          <span className="product-price">₹{product.price.toLocaleString()}</span>
          <span className="product-badge">{product.badge}</span>
        </div>
        <p className="product-note">{product.note}</p>
      </div>
      <div className="product-actions">
        <button type="button" onClick={() => onViewDetails(product)}>
          View Details
        </button>
        <button type="button" className="primary-btn" onClick={() => onAddToCart(product)}>
          Add to Cart
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
