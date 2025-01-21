import React from "react";

class Form extends React.Component {
  itemRef = React.createRef();

  handleClick = (value) => {
    const { onAdd } = this.props;
    const input = this.itemRef.current;

    if (!input.value.trim()) return;

    onAdd(input.value.trim());
    input.value = "";
  };

  render() {
    return (
      <section>
        <input ref={this.itemRef} />
        <input type="submit" onClick={this.handleClick} />
      </section>
    );
  }
}

export default Form;
