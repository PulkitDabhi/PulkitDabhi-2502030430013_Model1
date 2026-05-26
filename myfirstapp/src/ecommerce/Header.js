function Header({ currentPage, cartCount, onNavigate }) {
  const navItems = [
    { label: 'Home', value: 'home' },
    { label: 'Products', value: 'products' },
    { label: 'Cart', value: 'cart' },
  ];

  return (
    <header className="site-header">
      <div className="brand-block">
        <p className="brand-mark">E</p>
        <div>
          <h1>ElectroMart</h1>
          <p>Electronics for modern living</p>
        </div>
      </div>

      <nav className="main-nav">
        {navItems.map((item) => (
          <button
            key={item.value}
            type="button"
            className={currentPage === item.value ? 'active-nav' : ''}
            onClick={() => onNavigate(item.value)}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <div className="header-actions">
        <span className="cart-pill">Cart ({cartCount})</span>
      </div>
    </header>
  );
}

export default Header;
