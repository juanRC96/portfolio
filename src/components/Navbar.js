import AuthContext from "../context/AuthContext";

function Navbar(){

    return(
        <AuthContext.Consumer>
            {
                context => (
                    <div className='contenedor-navbar'>
                        <nav>
                            <ul>
                                <li><a href="/">HOME</a></li>
                                <li><a href="/#about">ABOUT ME</a></li>
                                <li><a href="/#skills">SKILLS</a></li>
                                <li><a href="/#studies">STUDIES</a></li>
                                {
                                    context.userLogin &&
                                    <li><a href="/" onClick={context.logoutUser} style={{color:"white"}}>Cerrar sesion</a></li>
                                }
                            </ul>
                        </nav>
                    </div>
                )
            }
          </AuthContext.Consumer>
    )
}
export default Navbar;