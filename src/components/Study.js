import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { deleteStudy, updateStudies } from "../services/portfolioServices";

function Study(props){

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
        await updateStudies(nombre[0], data);
        props.setRefresh((old) => old + 1);
        setTimeout(()=>{
      },1000)
      } catch (error) {
        console.log(error);
      }
    };

    const deleteStudies = async() => {
      props.setRefresh((old) => old + 1);
      await deleteStudy(props.nombre)
    }


return(
    <Form className="formulario" onSubmit={handleSubmit(onSubmit)} style={{width:"90%",marginRight:"auto",marginLeft:"auto",marginUp:"1rem",marginBottom:"1rem"}}>
    <Form.Group>
    <Form.Label style={{}}><h5>Study</h5></Form.Label>
    <Form.Control
      type="text"
      name="detalle"
      {...register("detalle", { required: true })}
    />
    {errors.cuerpo && <span>El campo es obligatorio</span>}
  </Form.Group>
  <Button variant="primary" type="submit">Modificar</Button>
  <Button variant="danger" onClick={deleteStudies}>Eliminar</Button>
  </Form>
)
}

export default Study;