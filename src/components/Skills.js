import { useEffect, useState } from "react";
import { getAllSkills, getAllStudies } from "../services/portfolioServices";

function Skills(){

    const[skills,setSkills] = useState([])
    const[studies,setStudies] = useState([])
    const[loading,setLoading] = useState(false)

    useEffect(()=>{
        setLoading(true)
        const request = async() =>{
            const allskills = await getAllSkills();
            const allStudies = await getAllStudies();
            setSkills(allskills);
            setStudies(allStudies);
            setLoading(false)
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
                <div>
                    
                </div>
            }
            <div className="skills-text">
                <h3>Studies</h3>
                {studies.map((e)=><p key={e.id}>{e.data().detalle}</p>)}
                <h3>Skills</h3>
                {skills.map((s)=><p key={s.id}>{s.data().detalle}</p>)}
                <p></p>
            </div>
        </div>
    )
}
export default Skills;

