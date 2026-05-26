import ProductCard from './ProductCard';

function Home({ products, onShopNow, onViewDetails, onAddToCart }) {
  const featuredProducts = products.slice(0, 3);

  return (
    <div>
      <section className="hero-banner">
        <div>
          <p className="eyebrow">Latest electronics deals</p>
          <h2>Upgrade your home with smart TV, fridge, phone, and AC essentials.</h2>
          <p>
            Explore premium electronics with flexible EMI options, doorstep delivery,
            and dependable service plans.
          </p>
          <div className="hero-actions">
            <button type="button" className="primary-btn" onClick={onShopNow}>
              Shop Now
            </button>
          </div>
        </div>
        <div className="hero-stats">
          <div>
            <strong>50+</strong>
            <span>Top brands</span>
          </div>
          <div>
            <strong>24h</strong>
            <span>Fast dispatch</span>
          </div>
          <div>
            <strong>12M</strong>
            <span>Happy customers</span>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Featured deals</p>
            <h2>Trending electronics this week</h2>
          </div>
          <p>Choose from the top-rated products that shoppers are loving right now.</p>
        </div>

        <div className="product-grid">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewDetails={onViewDetails}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;