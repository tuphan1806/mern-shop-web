import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';

export default function CheckoutSteps(props) {
  return (
    <Row className="checkout-steps">
      <Col className={props.step1 ? 'active' : ''}>Đăng nhập</Col>
      <Col className={props.step2 ? 'active' : ''}>Giao hàng</Col>
      <Col className={props.step3 ? 'active' : ''}>Thanh toán</Col>
      <Col className={props.step4 ? 'active' : ''}>Đặt hàng</Col>
    </Row>
  );
}
