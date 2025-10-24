import {Card} from "react-bootstrap";
import Navigation from './navigation';

function articles(){
    return(
        <Card
            style={{
              width: '800px',
              height: '400px',}}>
        <Navigation/>
        <h3 className="mt-3">React — Building UI the Smart Way</h3>
        <p className="text-start">React is a JavaScript library used to build dynamic and reusable user interfaces.  
    It helps developers create components that update automatically when data changes.
        </p>
        <p className="text-start">
    Instead of reloading the entire page, React updates only the parts that need to change — this makes web apps faster and smoother.  
    It uses the concept of <b>Virtual DOM</b> to track updates efficiently.
        </p>
        <p className="text-start">
    React also supports libraries like <b>React Router</b> for navigation and <b>React Bootstrap</b> for quick, responsive design.
    Learning React gives you the power to create single-page applications easily.<br/><br/>
    You can read my other blogs on <a href="https://jinetta-shree.medium.com/">Medium</a>
        </p>
        </Card>
    );
}

export default articles;