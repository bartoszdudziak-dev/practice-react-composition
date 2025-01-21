import React from "react";

class List extends React.Component {
  render() {
    const { items } = this.props;

    return (
      <ul>
        {items.map((item) => {
          const { id, name, size, content } = item;
          return (
            <li key={id} style={{ maxWidth: "500px", wordWrap: "break-word" }}>
              <div>
                <span>Name: </span>
                {name}
              </div>
              <div>
                <span>Size: </span>
                {size} B
              </div>
              <div>
                <span>Content: </span>
                {content}
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default List;
