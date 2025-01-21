import React from "react";
import { createRoot } from "react-dom/client";

import List from "./List";
import Form from "./Form";

class App extends React.Component {
  state = {
    usersList: [],
  };

  addItem = (newItem) => {
    this.setState((prevState) => {
      return {
        usersList: [...prevState.usersList, newItem],
      };
    });
  };

  render() {
    const { usersList } = this.state;

    return (
      <section>
        <Form onAdd={this.addItem} />
        <List items={usersList} />
      </section>
    );
  }
}

const root = createRoot(document.querySelector("#root"));
root.render(<App />);
