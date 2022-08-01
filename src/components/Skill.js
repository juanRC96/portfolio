import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { updateSkills } from "../services/portfolioServices";

function Skill(props){

    const {register,handleSubmit,setValue,formState: { errors }} = useForm();
    const nombre = useState(props.nombre)
    const texto = useState(props.texto)

    useEffect(()=>{
        const setear = () =>{
          try{
          setValue("detalle",texto[0]);
        }
        catch(e){
          console.log(e)
        }}
      setear();
    },[])
  
    const onSubmit = async (data) => {
      try {
        updateSkills(nombre[0], data);
        console.log(data)
        setTimeout(()=>{
      },1000)
      } catch (error) {
        console.log(error);
      }
    };


return(
    <Form className="formulario" onSubmit={handleSubmit(onSubmit)} style={{width:"90%",marginRight:"auto",marginLeft:"auto"}}>
    <Form.Group>
    <Form.Label style={{color:"white"}}><h5>Skill</h5></Form.Label>
    <Form.Control
      type="text"
      name="detalle"
      {...register("detalle", { required: true })}
    />
    {errors.cuerpo && <span>El campo es obligatorio</span>}
  </Form.Group>
  <Button variant="primary" type="submit">Submit</Button>
  </Form>
)
}

export default Skill;