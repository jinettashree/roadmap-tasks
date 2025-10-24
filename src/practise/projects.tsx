import {Card} from "react-bootstrap";
import Navigation from './navigation';

function projects() {
  return (
    <Card
    style={{
      width: '800px',
      height: '400px',}}>
      <Navigation/>
      <Card.Body className="mt-5">
        <Card.Text className="d-flex text-start justify-content-center align-items-center"
        style={{lineHeight:"2"}}>
        This is the Projects page. These are the basic projects I have worked on:<br/>
        1. Single Page-cv using React.js<br/>
        2. Accessible form page<br/>
        3. Simple landing page using HTML and CSS<br/>
        More projects will be added soon!
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default projects;