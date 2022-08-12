import {motion} from "framer-motion";

function Profile(){

    return(
        <motion.div className='perfil' initial={{ x:"-100%"}} animate={{x:"0%",transition:{duration: 2}}}> 
                <motion.div className="foto" initial={{ opacity: 0,scale: 0,rotate:0 }} animate={{opacity: 1,transition:{duration: 1},rotate: 360,scale:1}} whileHover={{ scale: 1.1}} whileTap={{rotate:100}}>
                    <img src="images/profile.jpg" alt=""/>
                </motion.div>

            <div className="titulo">
                <motion.h1 animate={{x:"150%",transition:{type:"spring",duration: 4}}}>
                    Juan Ignacio Cuesta
                </motion.h1>
                
            </div>
            <div className="subtitulo">
                <motion.h2 animate={{x:"150%",transition:{type:"spring",duration: 4, delay:2}}}>
                    Full Stack Developer
                </motion.h2>
            </div>
        </motion.div>
    )
}
export default Profile;
