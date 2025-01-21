import React from "react";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Total Price</th>
      </tr>
    </thead>
  );
};

const TableBody = ({ data }) => {
  return (
    <tbody>
      {data.map((row) => (
        <TableRow key={row.id} row={row} />
      ))}
    </tbody>
  );
};

const TableRow = ({ row }) => {
  const { name, price, quantity } = row;

  return (
    <tr>
      <td>{name}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>{quantity * price}</td>
    </tr>
  );
};

const TableFooter = ({ totalPrice }) => {
  return (
    <tfoot>
      <tr>
        <th>Total</th>
        <td>{totalPrice}</td>
      </tr>
    </tfoot>
  );
};

class Table extends React.Component {
  render() {
    const { data } = this.props;

    const totalPrice = data.reduce(
      (acc, cur) => acc + cur.quantity * cur.price,
      0
    );

    return (
      <table>
        <TableHeader />
        <TableBody data={data} />
        <TableFooter totalPrice={totalPrice} />
      </table>
    );
  }
}

export default Table;
