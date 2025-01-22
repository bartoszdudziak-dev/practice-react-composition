import React from "react";

const TableHeader = ({ cols }) => {
  const headerCols = cols.map((col, i) => <th key={i}>{col}</th>);

  return (
    <thead>
      <tr>{headerCols}</tr>
    </thead>
  );
};

const TableBody = ({ rows, cols }) => {
  const getColsValues = (row) =>
    cols.map((col) =>
      typeof col.value === "function" ? col.value(row) : row[col.value]
    );

  const bodyRows = rows.map((row) => (
    <TableRow key={row.id} cols={getColsValues(row)} />
  ));

  return <tbody>{bodyRows}</tbody>;
};

const TableRow = ({ cols }) => {
  return (
    <tr>
      {cols.map((col, i) => (
        <td key={i}>{col}</td>
      ))}
    </tr>
  );
};

const TableFooter = ({ cols }) => {
  const footerColumns = cols.map((col, i) => {
    if (i === 0) {
      return <th key={i}>{col}</th>;
    } else {
      return <td key={i}>{col}</td>;
    }
  });

  return (
    <tfoot>
      <tr>{footerColumns}</tr>
    </tfoot>
  );
};

class Table extends React.Component {
  render() {
    const { data, cols, footer } = this.props;
    const header = cols.map((col) => col.name);

    return (
      <table>
        <TableHeader cols={header} />
        <TableBody rows={data} cols={cols} />
        <TableFooter cols={footer} />
      </table>
    );
  }
}

export default Table;
