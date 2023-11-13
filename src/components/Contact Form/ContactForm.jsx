import { Form, Button } from "react-bootstrap";

import React from "react";

const ContactForm = () => {
  return (
    <Form>
      <form className="mb-5">
        <div className="form-group">
          <label for="exampleFormControlInput1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>

        <div className="form-group mt-3">
          <label for="exampleFormControlTextarea1">Your Message</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
      </form>
      <Button variant="danger">Send</Button>
    </Form>
  );
};

export default ContactForm;
