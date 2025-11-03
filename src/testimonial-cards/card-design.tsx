import { Card, Col, Row, Image} from 'react-bootstrap';
import dataList from './data';

function cardDesign(){
return(
    <Row className="g-4">
        <h3>Testimonial Cards</h3>
        {dataList.map((item,index)=>(
            <Col md={4} key={index} className='mb=4'>
                <Card className="shadow" 
                style={{
                backgroundImage: 'linear-gradient(to bottom, #f5f5f5f5 55%, #000000ff 45%)'
                }}>
                    <Card.Body>
                        <Row>
                            <Col>
                            <Image
                            src={item.image} roundedCircle />
                            </Col>
                            
                            <Col>
                            <Card.Title className='mt-4'>{item.name}</Card.Title>
                            <Card.Subtitle>-{item.position}</Card.Subtitle>
                            </Col>
                        </Row>
                        <Card.Text className='mt-3'
                        style={{
                            color:'#f3f2f2ff',
                            fontStyle:'italic',
                            fontSize:'18px'
                        }}>{item.text}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        ))}
    </Row>
);
}

export default cardDesign;