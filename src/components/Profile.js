import {motion} from "framer-motion";

function Profile(){

    return(
        <div className='perfil'> 
                <motion.div className="foto" initial={{ opacity: 0,scale: 0,rotate:0 }} animate={{opacity: 1,transition:{duration: 1},rotate: 360,scale:1}} whileHover={{ scale: 1.1}} whileTap={{rotate:100}}>
                    <img src="images/profile.jpg" alt=""/>
                </motion.div>

            <div className="titulo">
                <motion.h1 animate={{x:"150%",transition:{type:"spring",duration: 4}}}>
                    Juan Ignacio Cuesta
                </motion.h1>
                
            </div>
            <div className="subtitulo">
                <motion.h2 animate={{y:200,transition:{type:"spring",duration: 2}}} style={{color:"white",position:"relative",top:"-12rem"}}>
                    Full Stack Developer
                </motion.h2>
            </div>
        </div>
    )
}
export default Profile;
