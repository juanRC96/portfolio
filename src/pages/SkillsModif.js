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
    <h3 style={{color:"white"}}>Skills</h3>
    {skills.map((s)=><Skill key={s.id} nombre={s.id} texto={s.data().detalle} setRefresh={setRefresh}/>)}

      <Form className="formulario" onSubmit={handleSubmit(onSubmit)} style={{width:"90%",marginRight:"auto",marginLeft:"auto"}}>
      <Form.Group>
      <Form.Label style={{color:"white"}}><h2>Agregar skill</h2></Form.Label>
      <Form.Control
        type="text"
        name="detalle"
        {...register("detalle", { required: true })}
      />
      {errors.cuerpo && <span>El campo es obligatorio</span>}
    </Form.Group>
    <Button variant="primary" type="submit">Submit</Button>
    </Form>

    </>
    )
}