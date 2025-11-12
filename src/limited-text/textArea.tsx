import { useState } from "react";
import {Form, Container} from 'react-bootstrap';
function TextArea(){
    const[limit,setLimit]=useState("");

    const lengthLimit=250;

    const handleChange=(e: React.ChangeEvent<HTMLTextAreaElement>)=>{
        if (e.target.value.length<=lengthLimit) {
        setLimit(e.target.value);
        }
    }

    const limitReached=limit.length===lengthLimit;

    return(
        <Container className="shadow bg-white rounded align-items-center"
        style={{
            width:"500px"
        }}>
            <Form>
                <Form.Group className="text-start">
                    <Form.Label>Enter your message</Form.Label>
                    <Form.Control 
                    as="textarea"
                    rows={3} 
                    value={limit}
                    onChange={handleChange}
                    maxLength={lengthLimit} 
                    placeholder="Start typing..."
                    style={{
                        borderColor: limitReached ? "red" : "",
                    }} />
                </Form.Group>
            </Form>
            <div className="text-end mt-2"
            style={{ 
            color: limitReached ? "red" : "" 
            }}>
                {limit.length}/{lengthLimit}
            </div>
        </Container>
    );
}

export default TextArea;