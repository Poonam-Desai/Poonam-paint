function Product(props) {
  return (
    <div><br />
      <h2>Product Details</h2><br />
      <p>Product Name : {props.name}</p>
      <p>Price: ₹{props.price}</p>
      <p>Category: {props.category}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <Product
        name=" Laptop"
        price=" 60000"
        category=" Electronics"
      />
    </div>
  );
}

export default App;
