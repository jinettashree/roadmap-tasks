import {useState} from 'react';
import {Form, Button, InputGroup} from 'react-bootstrap'

function PasswordField() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); 

  const [confirmPassword, setConfirmPassword] = useState("");
  const[showConfirmPassword, setShowConfirmPassword] = useState(false);

return(
<Form>
    <Form.Group className="text-start mt-3">
    <Form.Label>Enter Password</Form.Label>
    <InputGroup>
        <Form.Control
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant="outline-secondary" 
          onClick={() => setShowPassword(!showPassword)}>
        {showPassword ? "Hide" : "Show"}
        </Button>
      </InputGroup>
    </Form.Group>

    <Form.Group className="text-start mt-3">
    <Form.Label>Confirm Password</Form.Label>
    <InputGroup>
    <Form.Control 
    type={showConfirmPassword ? "text": "password"} 
    placeholder="Password" 
    value={confirmPassword}
    onChange={(e) => setConfirmPassword(e.target.value)}
    />

    <Button
      variant="outline-secondary" 
          onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
    {showConfirmPassword ? "Hide" : "Show"}
    </Button>
    </InputGroup>
    </Form.Group>
</Form>
)
}
export default PasswordField;
