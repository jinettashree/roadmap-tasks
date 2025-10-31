import {Form, Card, Col, Row, Container, Button} from "react-bootstrap";
import PasswordField from "./password";

function fields(){
return(
    <Card
    style={{width:"1000px"}}>
        <Row>
        <Col md={6}>
            <Form>
            <Form.Group className="text-start">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group className="text-start mt-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            </Form>

        <PasswordField/>

        <Button className="mt-3"
        variant="dark">Update Profile</Button>
        </Col>

            <Col>
            <Container className="rounded mt-3 d-flex justify-content-center align-items-center"
            style={{
                backgroundColor:"#d3d6d870",
                width:"300px",
                height:"300px",
            }}>
            <h6 
            style={{ fontWeight: "normal"}}>
                <s>Create Account<br/><br/>
                Update Roadmap Progress <br/><br/>
                Setup Public Profile<br/><br/></s>
                Complete Your First Project <br/><br/>
                Invite your friends
            </h6>
            </Container>
            </Col>
        </Row>
    </Card>
);
}

export default fields;