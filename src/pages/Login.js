import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import firebase from "../config/firebase";

function Login(){

    const [showPassword,setShowPassword] = useState(false)
    const [form,setForm] = useState({email:"",password:""})
    const [success,setSuccess] = useState(false)

    const handleClick = async(event) =>{
        event.preventDefault();
        try{
            await firebase.auth().signInWithEmailAndPassword(form.email,form.password);
            alert("sesion iniciada")
        }catch(error){
            console.log(error);
            alert("error")
        } 
    }

    const handleChange = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        setForm({ ...form, [name]: value });
        console.log(form)
    }

    return(
        <div className="login" style={{backgroundColor:"white",width:"90%",marginLeft:"auto",marginRight:"auto",padding:"3rem",borderRadius:"10px",marginBottom:"6rem",marginTop:"2rem"}}>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name="email" placeholder="Ingresar email" onChange={handleChange}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" name="password" placeholder="Ingresar contraseña" onChange={handleChange}/>
      </Form.Group>

      <Button variant="primary" type="submit" onClick={handleClick}>
        Submit
      </Button>
    </Form>
        </div>
    )
}

export default Login;