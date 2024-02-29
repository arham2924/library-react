import Nav from "./components/Nav";
import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import Footer from "./components/footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Books from "./pages/books";
import BookInfo from "./pages/Bookinfo";
import { books } from "./data";
import Cart from "./pages/cart";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    setCart([...cart, { ...book, quantity: 1 }]);
  }

  function changeQuantity(book, quantity) {
    setCart(
      cart.map((item) => {
        return item.id === book.id
          ? {
              ...item,
              quantity: +quantity,
            }
          : item;
      })
    );
  }

  function removeItem(item) {
    setCart(cart.filter(book => book.id !== item.id))
      }

  function numberOfItems() {
    let counter = 0
    cart.forEach(item => {
      counter += item.quantity
    })
    return counter
  }
    

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <Router>
      <div className="App">
        <Nav  numberOfItems={numberOfItems()}/>
        <Route exact path="/" component={Home} />
        <Route exact path="/books" render={() => <Books books={books} />} />
        <Route
          path="/books/:id"
          render={() => (
            <BookInfo books={books} addToCart={addToCart} cart={cart} />
          )}
        />
        <Route
          path="/cart"
          render={() => (
            <Cart books={books} cart={cart} changeQuantity={changeQuantity} removeItem={removeItem} />
          )}
        />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
