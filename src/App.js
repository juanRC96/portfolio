import './App.css';

function App() {
  return (
    <div className="App">
        <div className='contenedor-navbar'>
          <div className="navbar">
            <nav>
                <ul>
                    <li><a href="">HOME</a></li>
                    <li><a href="">EDUCATION</a></li>
                    <li><a href="">SKILLS</a></li>
                    <li><a href="">WORK EXPERIENCE</a></li>
                </ul>
            </nav>
          </div>
        </div> 

      <header>
        <div className='perfil'> 
          <div className="foto">
            <img src="images/profile.jpg" alt=""/>
          </div>
          <div className="titulo">
            <h1>Juan Ignacio Cuesta</h1>
          </div>
          <div className="subtitulo">
            <h2>Full Stack Developer</h2>
          </div>
        </div>
      </header>



      <main>
        <div className="about-me">
            <div className="about-me-text">
                <h3>About me</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quisquam placeat quibusdam culpa quae modi tenetur quaerat, accusamus a. In officia laboriosam dolorem veritatis non modi voluptates ipsum a magnam, odit, ipsa quas facilis alias nesciunt libero voluptas ad impedit rem sed. Repellat eveniet eaque accusamus delectus inventore, quo provident?</p>
            </div>
            <div className="about-me-image">
                <img src="images/program_img.jpg" alt=""/>
            </div>
        </div>

        <div className="projects">
            <div className="projects-image">
                <img src="images/program_img1.jpg" alt=""/>
            </div>
           <div className="projects-text">
               <h3>Projects</h3>
               <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore vero ea dolor ipsum odio minima fuga quae velit? Aperiam reiciendis libero doloribus vel obcaecati veniam debitis, dolore ex voluptate dolorum? Saepe dolor earum in, odit provident rem, molestiae sit quibusdam maiores magni numquam harum suscipit nihil. Necessitatibus accusamus temporibus ratione.</p>
           </div>
        </div>
      </main>

    <footer>
      <div className="contacto">
            <nav>
                <ul>
                    <li><a href="https://www.instagram.com/juanirc1996/"><div className="image-footer"><img src="images/ig.png" alt=""/></div></a></li>
                    <li><a href="https://www.facebook.com/juan.cuesta.3192"><div className="image-footer"><img src="images/fb.png" alt=""/></div></a></li>
                    <li><a href="https://www.linkedin.com/in/juan-ignacio-cuesta/"><div className="image-footer"><img src="images/ln.png" alt=""/></div></a></li>
                    <li><a href=""><div className="image-footer"><img src="images/wa.png" alt=""/></div></a></li>
                </ul>
            </nav>
        </div>
      </footer>
    </div>
  );
}

export default App;
