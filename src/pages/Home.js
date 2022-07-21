import About from "../components/About";
import Contact from "../components/Contact";
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

        <footer>
            <Contact/>
        </footer>
    </div>
    )

}
export default Home;