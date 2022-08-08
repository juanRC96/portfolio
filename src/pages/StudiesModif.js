import { Button, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { addStudies, getStudies } from "../services/portfolioServices";
import Study from "../components/Study";
import AuthContext from "../context/AuthContext";

export default function StudiesModif(){

    const {register,handleSubmit,setValue,formState: { errors }} = useForm();
    const [skills,setSkills] = useState([])
    const [refresh,setRefresh] = useState(0)

    useEffect(()=>{
        const request = async() =>{
            try{
                const sk = await getStudies();
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
          addStudies(data);
          setRefresh((old) => old + 1);
          setTimeout(()=>{
        },1000)
        } catch (error) {
          console.log(error);
        }
      };

    return(
      <AuthContext.Consumer>
        {
          context => (context.userLogin &&
            <>
      <div style={{backgroundColor:"white",padding:"2rem",margin:"2rem",borderRadius:"10px"}}>
      <Form className="formulario" onSubmit={handleSubmit(onSubmit)} style={{width:"100%",marginRight:"auto",marginLeft:"auto",marginUp:"1rem",marginBottom:"1rem"}}>
      <Form.Group style={{width:"87%",display:"inline-block"}}>
      <Form.Label ><h4>Add studies</h4></Form.Label>
      <Form.Control
        type="text"
        name="detalle"
        style={{width:"100%",marginRight:"1rem",display:"inline-block"}}
        {...register("detalle", { required: true })}
      />
      {errors.cuerpo && <span>El campo es obligatorio</span>}
    </Form.Group>
    <Button variant="primary" type="submit">Add</Button>
    </Form>
    </div>
    <div style={{backgroundColor:"white",padding:"2rem",margin:"2rem",borderRadius:"10px"}}>
    {skills.map((s)=><Study key={s.id} nombre={s.id} texto={s.data().detalle} setRefresh={setRefresh}/>)}
    </div>
    </>
          )
        }
    </AuthContext.Consumer>
    )
}