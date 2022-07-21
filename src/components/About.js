import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { getAbout } from "../services/portfolioServices";

function About(){

    const[about,setAbout] = useState([])
    const[loading,setLoading] = useState(true)

    useEffect(()=>{
        const request = async() =>{
            const aboutMe = await getAbout();
            setAbout(aboutMe);
            setLoading(false)
        };
        request();
    },[])

    return(
        <div className="about-me">
            {
                loading &&
                <div className="about-me-text">
                    <Spinner animation="border" role="status" variant="light"/>
                </div>
            }
            {
                !loading &&
                <div className="skills-text">
                    <h3>About me</h3>
                    {about.map((a)=><p>{a.data().texto}</p>)}
                </div>
            }
            <div className="about-me-image">
                <img src="images/program_img.jpg" alt=""/>
            </div>
        </div>
    )
}
export default About;