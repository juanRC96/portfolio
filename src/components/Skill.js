import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { deleteSkills, updateSkills } from "../services/portfolioServices";

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
        await updateSkills(nombre[0], data);
        props.setRefresh((old) => old + 1);
        setTimeout(()=>{
      },1000)
      } catch (error) {
        console.log(error);
      }
    };

    const deleteSkill = async() => {
      props.setRefresh((old) => old + 1);
      await deleteSkills(props.nombre)
    }


return(
    <Form className="formulario" onSubmit={handleSubmit(onSubmit)} style={{marginLeft:"auto",marginRight:"auto",marginUp:"1rem",marginBottom:"1rem",display:"inline-block",width:"100%"}}>
    <Form.Group style={{width:"87%",display:"inline-block"}}>
    <Form.Control
      type="text"
      name="detalle"
      style={{width:"100%",marginRight:"1rem",display:"inline-block"}}
      {...register("detalle", { required: true })}
    />
    {errors.cuerpo && <span>El campo es obligatorio</span>}
  </Form.Group>
  <Button variant="primary" type="submit" style={{display:"inline-block"}}>Modificar</Button>
  <Button variant="danger" onClick={deleteSkill} style={{display:"inline-block"}}>Eliminar</Button>
  </Form>
)
}

export default Skill;