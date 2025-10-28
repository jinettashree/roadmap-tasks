import {Nav, Navbar, Card, Col, Fade} from 'react-bootstrap';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function HoverButton() {
  return (
    <Card
    style={{
      width: '500px',
      height: '250px',
      outline: 'bold',}}>
        <Col md={12}>
            <Navbar>
                <Nav className="me-auto">
                    <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip id="home-tooltip">This is the Home page that encloses the profile of the author.</Tooltip>}
                    container={document.body}
                    transition={Fade}
                    >
                        <Nav.Link href="home">Home</Nav.Link>
                    </OverlayTrigger>
                </Nav>

                <Nav className="me-auto">
                    <OverlayTrigger
                    placement="bottom"
                    overlay={<Tooltip id="projects-tooltip">Here is everything I have built</Tooltip>}
                    container={document.body}
                    transition={Fade}
                    >
                        <Nav.Link href="projects">Projects</Nav.Link>
                    </OverlayTrigger>
                </Nav>

                <Nav className="me-auto">
                    <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip id="products-tooltip">The products we got patent and are available in market are listed here</Tooltip>}
                    container={document.body}
                    transition={Fade}
                    >
                        <Nav.Link href="projects">Products</Nav.Link>
                    </OverlayTrigger>
                </Nav>

                <Nav className="me-auto">
                    <OverlayTrigger
                    placement="bottom"
                    overlay={<Tooltip id="upcomingprojects-tooltip">Upcoming projects we are working on are here</Tooltip>}
                    container={document.body}
                    transition={Fade}
                    >
                        <Nav.Link href="upcoming projects">Upcoming projects</Nav.Link>
                    </OverlayTrigger>
                </Nav>

                <Nav className="me-auto">
                    <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip id="feedback-tooltip"> Give your feedback,which help us to enhance and give you enhanced products and projects</Tooltip>}
                    container={document.body}
                    transition={Fade}
                    >
                        <Nav.Link href="feedback">Feedback</Nav.Link>
                    </OverlayTrigger>
                </Nav>

                <Nav className="me-auto">
                    <OverlayTrigger
                    placement="bottom"
                    overlay={<Tooltip id="Contactus-tooltip">Contact here for any query</Tooltip>}
                    container={document.body}
                    transition={Fade}
                    >
                        <Nav.Link href="contactus">Contact us</Nav.Link>
                    </OverlayTrigger>
                </Nav>
            </Navbar>

            <Card.Text 
            style={{fontStyle: 'italic'}}
            className='mt-5'>Tooltip practice on nav bars</Card.Text>
        </Col>
    </Card>
  );
}

export default HoverButton;