import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HomeHeader from '../../component/homeHeader';
const HomePage = () => {
    return (
        <Container>
            <Row> 
                <Col>
                <HomeHeader></HomeHeader>
                </Col>
            </Row>
        </Container>
        

    );
}
export default HomePage;