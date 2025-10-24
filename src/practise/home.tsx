import { Card} from "react-bootstrap";
import Navigation from './navigation';

function Home() {
  return (
    <Card
    style={{
      width: '800px',
      height: '400px',}}>
      <Navigation/>
        <Card.Body className="mt-3">
        <Card.Text className="d-flex text-start justify-content-center align-items-center"
        style={{lineHeight:"2"}}>
        Hi I'm Jinetta, currently pursuing my Bachelor's degree in Electronics and Communication Engineering in SSMIET, Dindigul. <br/>
Out of my own interest learnt basics in C programming, C++, JAVA, Javascript and interested in learning new skills in software development and technology.<br/>
Currently learning React.js and looking for internship opportunities in the field of Front-end development.<br/>
Excited to connect with professionals and to explore new opportunities!
        </Card.Text>
        </Card.Body>
    </Card>
  );
}

export default Home;