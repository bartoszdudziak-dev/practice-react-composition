import React from "react";
import { createRoot } from "react-dom/client";

import File from "./File";
import List from "./List";

class App extends React.Component {
  state = {
    filesList: [],
  };

  addFile = (newFile) => {
    this.setState((prev) => {
      return {
        filesList: [...prev.filesList, newFile],
      };
    });
  };

  render() {
    const { filesList } = this.state;

    return (
      <section>
        <File addFile={this.addFile} />
        <List items={filesList} />
      </section>
    );
  }
}

const root = createRoot(document.querySelector("#root"));
root.render(<App />);
