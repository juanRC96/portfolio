
import About from "../components/About";
import Profile from "../components/Profile";
import Skills from "../components/Skills";
import Studies from "../components/Studies";
import AuthContext from "../context/AuthContext";
import {motion} from "framer-motion";

function Home(){


    return(
        <AuthContext.Consumer>
            {
                context => (
                    <div className="home">

                    <header>
                        <Profile/>
                    </header>
            
                    <main>
                        <section id="about">
                            <About/>
                        </section>
                        <section id="skills">
                            <Skills/>
                        </section>
                        <section id="studies">
                            <Studies/>
                        </section>
                    </main>
                </div>
                )
            }

    </AuthContext.Consumer>
    )

}
export default Home;