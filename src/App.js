import { Fragment } from "react";
import Navbars from "./components/Navbar/Navbar";
import Cards from "./components/Card/Card";

function App() {
  return (
    <Fragment>
      <Navbars />
      <div className="container">
        <h1>Our Products</h1>
        <Cards />
      </div>
    </Fragment>
  );
}

export default App;
