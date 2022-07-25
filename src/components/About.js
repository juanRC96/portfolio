import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { getAbout } from "../services/portfolioServices";

function About(){

    const[about,setAbout] = useState([])
    const[loading,setLoading] = useState(true)
    const[error,setError] = useState(false)

    useEffect(()=>{
        const request = async() =>{
            try{
                const aboutMe = await getAbout();
                setAbout(aboutMe);
                setLoading(false);
            }
            catch(e){
                console.log(e);
                setLoading(false);
                setError(true);
            }
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
                !loading && !error &&
                <div className="about-me-text">
                    <h3>About me</h3>
                    {about.map((a)=><p>{a.data().texto}</p>)}
                </div>
            }
            {
                error &&
                <div className="error">
                    <h4>Ocurrió un error</h4>
                </div>
            }
            
                


            <div className="about-me-image">
                <img src="images/program_img.jpg" alt=""/>
            </div>
        </div>
    )
}
export default About;