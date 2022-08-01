import { Button, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { getAbout, updateAbout } from "../services/portfolioServices";

export default function StudiesModif(){

    const {register,handleSubmit,setValue,formState: { errors }} = useForm();
    const [id,setId] = useState("")
    const [contador,setContador] = useState(0)

    useEffect(()=>{
        const request = async() =>{
            try{
                const about = await getAbout();
                about.forEach((a)=>{
                    setValue("texto",a.data().texto);
                    setId(a.id);
                    setContador(a.data().texto.length)
            })
            console.log("usefect")
            }
            catch(e){
                console.log(e);
            }
        };
        request();
    },[setValue])

    const onSubmit = async (data) => {
        try {
          updateAbout(id, data);
          setTimeout(()=>{
        },1000)
        } catch (error) {
          console.log(error);
        }
      };

      const recalculate = (e) => {
        console.log('event value:', e);
        setContador(e.target.value.length);
    };

    return(
    <Form className="formulario" onSubmit={handleSubmit(onSubmit)} style={{width:"90%",marginRight:"auto",marginLeft:"auto"}}>

    <Form.Group>
      <Form.Label style={{color:"white"}}><h3>About</h3></Form.Label>
      <Form.Control
      {...register("texto", { required: true })}
        as="textarea"
        type="text"
        name="texto"
        style={{height:"10rem",marginBottom:"2rem"}}
        onChange={recalculate}
      />
      {errors.cuerpo && <span>El campo es obligatorio</span>}
    </Form.Group>
    {
        contador<=628 &&
        <>
        <p style={{fontSize:"20px",color:"white"}}>{contador}/628</p>
        <Button variant="primary" type="submit">Submit</Button>
        </>
    }
        {
        contador>628 &&
        <p style={{fontSize:"20px",color:"red"}}>{contador}/628</p>
    } 
    </Form>
    )
}