import { useState } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import ProductListing from './ProductListing';
import ProductDetails from './ProductDetails';
import Cart from './Cart';
import Footer from './Footer';
import { products } from './content';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProductId, setSelectedProductId] = useState(products[0].id);
  const [cartItems, setCartItems] = useState([]);

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const selectedProduct = products.find((product) => product.id === selectedProductId);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevItems, { ...product, quantity: 1 }];
    });

    setCurrentPage('cart');
  };

  const handleViewDetails = (product) => {
    setSelectedProductId(product.id);
    setCurrentPage('details');
  };

  const updateQty = (productId, quantity) => {
    if (quantity <= 0) {
      setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
      return;
    }

    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  const handleContinueShopping = () => {
    setCurrentPage('products');
  };

  return (
    <div className="app-shell">
      <Header
        currentPage={currentPage}
        cartCount={cartCount}
        onNavigate={setCurrentPage}
      />

      <main className="main-content">
        {currentPage === 'home' && (
          <Home
            products={products}
            onShopNow={() => setCurrentPage('products')}
            onViewDetails={handleViewDetails}
            onAddToCart={addToCart}
          />
        )}

        {currentPage === 'products' && (
          <ProductListing
            products={products}
            onViewDetails={handleViewDetails}
            onAddToCart={addToCart}
          />
        )}

        {currentPage === 'details' && selectedProduct && (
          <ProductDetails
            product={selectedProduct}
            onAddToCart={addToCart}
            onBack={() => setCurrentPage('products')}
          />
        )}

        {currentPage === 'cart' && (
          <Cart
            cartItems={cartItems}
            onUpdateQty={updateQty}
            onRemove={removeFromCart}
            onContinueShopping={handleContinueShopping}
          />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
