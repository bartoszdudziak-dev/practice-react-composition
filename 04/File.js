import React from "react";
import { v4 as uuid } from "uuid";

class File extends React.Component {
  fileInput = React.createRef();

  readFile = () => {
    const { addFile } = this.props;
    const files = [...this.fileInput.current.files];

    files.forEach((file) => {
      const { name, size } = file;

      if (file.type.includes("text")) {
        const reader = new FileReader();

        reader.onload = () => {
          const newFile = { id: uuid(), name, size, content: reader.result };
          addFile(newFile);
        };

        reader.readAsText(file, "UTF-8");
      } else {
        alert("Provide text file!");
      }
    });
  };

  render() {
    return (
      <input
        onChange={this.readFile}
        ref={this.fileInput}
        type="file"
        multiple
      />
    );
  }
}

export default File;
