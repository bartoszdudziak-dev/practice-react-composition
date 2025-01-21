import React from "react";
import { createRoot } from "react-dom/client";

import Category from "./Category";
import Cart from "./Cart";

import data from "./data.json";

class App extends React.Component {
  state = {
    cart: [],
  };

  addItem = (newItem) => {
    this.setState((prev) => {
      return {
        cart: [...prev.cart, newItem],
      };
    });
  };

  removeItem = (id) => {
    this.setState((prev) => {
      return {
        cart: prev.cart.filter((item) => item.id !== id),
      };
    });
  };

  isAdded = (id) => {
    const { cart } = this.state;
    return cart.some((item) => item.id === id);
  };

  render() {
    const { cart } = this.state;

    return (
      <section>
        <Category items={data} onAdd={this.addItem} isAdded={this.isAdded} />
        <Cart items={cart} onRemove={this.removeItem} />
      </section>
    );
  }
}

const root = createRoot(document.querySelector("#root"));
root.render(<App />);
