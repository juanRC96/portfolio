import About from "../components/About";
import Contact from "../components/Contact";
import Profile from "../components/Profile";
import Projects from "../components/Projects";

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
            <section id="projects">
            <Projects/>
            </section>
        </main>

        <footer>
            <Contact/>
        </footer>
    </div>
    )

}
export default Home;