import { Nav } from "react-bootstrap";

function Contact(){
    return(
        <div className="contacto">
            <Nav style={{marginLeft:"auto",marginRight:"auto"}}>
                <ul>
                    <li><a href="https://www.instagram.com/juanirc1996/"><div className="image-footer"><img src="images/ig.png" alt=""/></div></a></li>
                    <li><a href="https://www.facebook.com/juan.cuesta.3192"><div className="image-footer"><img src="images/fb.png" alt=""/></div></a></li>
                    <li><a href="https://www.linkedin.com/in/juan-ignacio-cuesta/"><div className="image-footer"><img src="images/ln.png" alt=""/></div></a></li>
                    <li><a href=""><div className="image-footer"><img src="images/wa.png" alt=""/></div></a></li>
                </ul>
            </Nav>
        </div>
    )
}
export default Contact;