import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { getAllSkills, getAllStudies } from "../services/portfolioServices";

function Skills(){

    const[skills,setSkills] = useState([])
    const[studies,setStudies] = useState([])
    const[loading,setLoading] = useState(true)
    const[error,setError] = useState(undefined)

    useEffect(()=>{
        const request = async() =>{
            try{
                const allskills = await getAllSkills();
                const allStudies = await getAllStudies();
                setSkills(allskills);
                setStudies(allStudies);
                setLoading(false);
            }catch(e){
                console.log(e);
                setLoading(false);
                setError(true);
            }

        };
        request();
    },[])

    return(
        <div className="skills">
            <div className="skills-image">
                <img src="images/program_img1.jpg" alt=""/>
            </div>
            {
                loading &&
                <div className="skills-text">
                    <Spinner animation="border" role="status" variant="light"/>
                </div>
            }
            {
                !loading && !error &&
                <div className="skills-text">
                <h3>Studies</h3>
                {studies.map((e)=><p key={e.id}>{e.data().detalle}</p>)}
                <h3>Skills</h3>
                {skills.map((s)=><p key={s.id}>{s.data().detalle}</p>)}
            </div>
            }
            {
                error &&
                <div className="error">
                    <h4>Ocurrió un error</h4>
                </div>
            }
        </div>
    )
}
export default Skills;

