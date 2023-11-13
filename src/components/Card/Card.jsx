// import all components to be used
import { Card, Button, CardImg } from "react-bootstrap";
import "./Card.css";
import { foodCards } from "../../data";

// create the card component
const Cards = () => {
  return (
    <>
      <section className="sect mt-5 d-flex justify-content-between flex-wrap container">
        {foodCards.map((item) => {
          return (
            <Card className="a--card" key={item.price}>
              <CardImg src={item.image} alt="newfood" className="cardPhoto" />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>₦{Intl.NumberFormat().format(item.price)}</Card.Text>
                <Button variant="danger">Order Now</Button>
              </Card.Body>
            </Card>
          );
        })}
      </section>
    </>
  );
};

// export the card component
export default Cards;
