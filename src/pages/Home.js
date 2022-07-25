
import About from "../components/About";
import Profile from "../components/Profile";
import Skills from "../components/Skills";

function Home(){
    return(
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
        </main>
        
    </div>
    )

}
export default Home;