import 'bootstrap/dist/css/bootstrap.min.css';
import FEFTransparent from '../images/FEFTransparent.png';
import '../css/homeHeader.css';
import { Container, Row, Col } from 'react-bootstrap';

const HomeHeader = () => {
  return (
    <Container fluid className="FEFHeader">
      <Row>
        <Col><h1>Welcome to FEFCGL!</h1></Col>
      </Row>
      <Row>
        <Col><img src={FEFTransparent} className="FEFLogo" alt="fantasyLogo" /></Col>
      </Row>
    </Container>
  );
}

export default HomeHeader;