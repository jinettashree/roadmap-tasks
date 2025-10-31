import {Container, Card, ListGroup} from "react-bootstrap";
function singlePageCv(){
    return (
        <Container className="m-4 shadow p-3 mb-5 bg-white rounded">
            <Card>
            <h2 className="text-start">Jinetta Shree</h2>
            <h5 className="text-start"
            style={{color: 'rgba(124, 204, 113, 1)'}}>
                Junior Frontend Developer</h5>
            <Card.Text className="text-start">
                Smb Main Road,<br/>
                Dindigul.
            </Card.Text>

            <h5 className="text-start"
            style={{color: 'rgba(124, 204, 113, 1)'}}>
                Skills</h5>
            <ListGroup variant="flush"
            style={{ textAlign: "left" }}>
            <ListGroup.Item>HTML</ListGroup.Item>
            <ListGroup.Item>CSS</ListGroup.Item>
            <ListGroup.Item>JavaScript</ListGroup.Item>
            <ListGroup.Item>Presentation</ListGroup.Item>
            </ListGroup>

            <h5 className="text-start mt-3" 
            style={{color:"rgba(124, 204, 113, 1)"}}>
                Education
            </h5>

            <Card.Text className="text-start"
            style={{color:"rgba(104, 156, 216, 1)"}}>
                SSM Institute of Engineering and Technology <br/>
                Dindigul <br/>
            </Card.Text>
            <Card.Text className="text-start">
                CGPA: 7.9/10 <br/>
                Serving as Vice-President of EDC Club <br/>
                Actively participating and winning in Presentation and Project expo
            </Card.Text>

            <Card.Text className="text-start"
            style={{color:"rgba(104, 156, 216, 1)"}}>
                Soundararaja Vidyalaya <br/>
                Dindigul <br/>
            </Card.Text>
            <Card.Text className="text-start">
                Percentage: 85% <br/>
                Served as Prefect house leader <br/>
                Actively participated and won in CCA activities, dance
            </Card.Text>

            <h5 className="text-start" 
            style={{color:"rgba(124, 204, 113, 1)"}}>
                Experience
            </h5>
            <Card.Text className="text-start">
                Completed Intern at Coimbatore<br/>
                Domain: Frontend Developer<br/>
                Learned HTML, CSS, JavaScript, Bootstrap, ReactJS
            </Card.Text>

            <h5 className="text-start" 
            style={{color:"rgba(124, 204, 113, 1)"}}>
                Across the Internet
            </h5>
            <div className="text-start">
            <Card.Link href="https://medium.com/@jinettashree">Medium Account</Card.Link>
            <Card.Link href="https://www.linkedin.com/in/jinetta-shree-679577221">LinkedIn Account</Card.Link>
            <Card.Link href="https://github.com/jinettashree">GitHub Account</Card.Link>
            </div>
            </Card>
        </Container>
    );
}

export default singlePageCv;