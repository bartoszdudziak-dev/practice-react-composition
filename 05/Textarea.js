import React from "react";

class Textarea extends React.Component {
  ref = React.createRef();

  getSnapshotBeforeUpdate(prevProps, prevState) {
    const textarea = this.ref.current;

    return {
      resize: textarea.offsetHeight < 100,
    };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const textarea = this.ref.current;

    if (snapshot.resize) {
      textarea.style.height = "auto";

      if (textarea.offsetHeight < textarea.scrollHeight) {
        textarea.style.height = textarea.scrollHeight + "px";
      }
    }
  }

  render() {
    const { content, onChange } = this.props;

    return (
      <textarea ref={this.ref} value={content} onChange={onChange}></textarea>
    );
  }
}

export default Textarea;
