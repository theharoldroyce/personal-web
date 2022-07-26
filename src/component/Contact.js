import React, { useState } from "react";
import "./contact.css";
import { AiFillPhone, AiFillMail, AiFillHome } from "react-icons/ai";
import { Button, Form, Row, Col,FloatingLabel } from "react-bootstrap";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_zkdq7jj", "template_vbw60ff", form.current, "EzgIgkVja6ZzhxYOC")
      .then((result) => {
          console.log(result.text);
          console.log("message sent")
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className="c" id="Contact">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Contact me!</h1>
          <div className="c-info">
            <div className="c-info-item">
              <AiFillPhone className="c-icons" />
              <a>(+63) 9295 683 321</a>
            </div>
            <div className="c-info-item">
              <AiFillHome className="c-icons" />
              <a>Oriental Mindoro, Philippines</a>
            </div>
            <div className="c-info-item">
              <AiFillMail className="c-icons" />
              <a>theharoldroyce@gmail.com</a>
            </div>
          </div>
        </div>
        <div className="c-right">
          <h4 className="c-title">Get in touch!</h4>
          <Form ref={form} onSubmit={sendEmail}>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Name" name="user_name" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" name="user_email"  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3" controlId="formBasicSubject">
              <Form.Label>Subject</Form.Label>
              <Form.Control type="text" placeholder="Enter Subject" name="user_subject"  />
            </Form.Group>
            <FloatingLabel controlId="floatingTextarea2" label="Leave a message here" className="mb-3">
              <Form.Control
                as="textarea"
                placeholder="Leave a message here"
                style={{ height: "100px" }}
                name="message"
              />
            </FloatingLabel>
            <Button variant="success" type="submit" value="Send">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
export default Contact;
