import Navigation from "./navigation";
import {Card, Form, Col, Row, Button} from "react-bootstrap";
import { CiLocationOn } from "react-icons/ci";
import { PiPhoneThin } from "react-icons/pi";
import { MdOutlineMail } from "react-icons/md"


function contacts(){
    return(
        <Card
            style={{
              width: '800px',
              height: '500px',}}>
        <Navigation/>
        
            <Row className="mt-5">
                <Col md={6}>
                <Form.Group className="text-start">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>

                <Form.Group className="mt-3 text-start">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>
                
                <Form.Group className="mt-3 text-start">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button className="mt-3" variant="dark">Submit</Button>
                </Col>
                    
                <Col md={6} className="mt-5">
                <h5>Contact Information</h5><br/>
                    <PiPhoneThin /> +91 5678363827 <br/><br/>
                    <CiLocationOn/> Dindigul, TamilNadu, India <br/><br/>
                    <MdOutlineMail /> jinetta18@gmial.com
                </Col>
            </Row>
        </Card>
    );
}

export default contacts;