// import all the created components

import { Fragment } from "react";
import Navbars from "./components/Navbar/Navbar";
import Cards from "./components/Card/Card";
import ContactForm from "./components/Contact Form/ContactForm";

// assemble app
function App() {
  return (
    <Fragment>
      <Navbars />
      <div className="container">
        <h1>Our Products</h1>
        <Cards />
        <br />
        <br />
        <h1>Talk to us</h1>
        <ContactForm />
      </div>
    </Fragment>
  );
}

// export app
export default App;
