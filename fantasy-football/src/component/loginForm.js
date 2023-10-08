import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../css/loginForm.css';

function loginForm() {
  return (
    <Container className='shadow-lg bg-white rounded loginbox'>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className='loginTitles'>email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className='loginTitles'>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Row>
          <Col className='d-flex justify-content-center'>
            <Button className='btn-lg' variant="primary" type="submit">
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default loginForm;
