import { Nav, Col, Row,Card} from "react-bootstrap"
import { Link } from "react-router-dom";    

function navigation(){
return(
    <Row>
        <Col className="text-start" md={6}>
            <h5>Jinetta Shree</h5>
        <Card.Text>
            Front-end Developer intern at MentorBridge
        </Card.Text>
        </Col>
    
        <Col md={6}>
        <Nav variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
                <Nav.Link as={Link} to="/home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to="/articles">Articles</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to="/contacts">Contacts</Nav.Link>
            </Nav.Item>
        </Nav>
        </Col>
    </Row>
);
}

export default navigation;