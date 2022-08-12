import { useEffect, useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { getStudies } from "../services/portfolioServices";
import {motion} from "framer-motion";

function Studies(){
    const[studies,setStudies] = useState([])
    const[loading,setLoading] = useState(true)
    const[error,setError] = useState(undefined)

    useEffect(()=>{
        const request = async() =>{
            try{
                const allStudies = await getStudies();
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
        <AuthContext.Consumer>
            {
                context => (
                    <motion.div className="skills" initial={{ opacity: 0,scale: 0}} animate={{opacity: 1,transition:{duration: 1},scale:1}} whileTap={{scale:1.05}}>
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
                        {
                            context.userLogin &&
                            <Button as={Link} to="/studiesmodif" >Modificar</Button>
                        }
                    </div>
                    }
                    {
                        error &&
                        <div className="error">
                            <h4>Ocurrió un error</h4>
                        </div>
                    }
                    <div className="skills-image">
                        <img src="images/program_img2.jpg" alt=""/>
                    </div>
                </motion.div>
                )
            }
        </AuthContext.Consumer>
    )
}
export default Studies;

