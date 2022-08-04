import { Button, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { addSkills, getSkills } from "../services/portfolioServices";
import Skill from "../components/Skill";

export default function SkillsModif(){

    const {register,handleSubmit,setValue,formState: { errors }} = useForm();
    const [skills,setSkills] = useState([])
    const [refresh,setRefresh] = useState(0)

    useEffect(()=>{
        const request = async() =>{
            try{
                const sk = await getSkills();
                setSkills(sk);
            }
            catch(e){
                console.log(e);
            }
        };
        request();
    },[refresh])

    const onSubmit = async (data) => {
        try {
          console.log(data)
          addSkills(data);
          setRefresh((old) => old + 1);
          setTimeout(()=>{
        },1000)
        } catch (error) {
          console.log(error);
        }
      };

    return(
      <>
    <div style={{backgroundColor:"white",padding:"2rem",margin:"2rem",borderRadius:"10px"}}>
      <Form className="formulario" onSubmit={handleSubmit(onSubmit)} style={{marginLeft:"auto",marginRight:"auto",marginUp:"1rem",marginBottom:"1rem",display:"inline-block",width:"100%"}}>
      <Form.Group style={{width:"87%",display:"inline-block"}}>
      <Form.Label style={{}}><h4>Agregar skill</h4></Form.Label>
      <Form.Control
        type="text"
        name="detalle"
        style={{width:"100%",marginRight:"1rem",display:"inline-block"}}
        {...register("detalle", { required: true })}
      />
      {errors.cuerpo && <span>El campo es obligatorio</span>}
    </Form.Group>
    <Button variant="primary" type="submit">Agregar</Button>
    </Form>
    </div>
    <div style={{backgroundColor:"white",padding:"2rem",margin:"2rem",borderRadius:"10px"}}>
    {skills.map((s)=><Skill key={s.id} nombre={s.id} texto={s.data().detalle} setRefresh={setRefresh}/>)}
    </div>
    </>
    )
}