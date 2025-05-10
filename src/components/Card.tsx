import { motion } from 'framer-motion';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

interface CardProps {
    imgSrc: string;
    value: string;
    variants?: string;
    imgSize?: string;
}

const Card = ({imgSrc, value, variants, imgSize}: CardProps) => {
    const {showAll} = useContext(AppContext);


    const motionVariants = {
        inactive: {
        y: [0, -120, 50, 0],
        scale: [1, 1, 0.9, 0.9, 1],
        rotate: [0, 0, 0, 0, 5],
        },
        active: {
            scale: [1, 0.9, 0.9, 1, 1],
            y: [0, 40, -120, 0], // Keyframe animation
            rotate: [5, 5, 5, 0, 0], // Keyframe animation
        },
    };

  return (
    <motion.div
    // initial={{ y: 0, scale: 1 }}
    variants={motionVariants}
    // animate={showAll ? "active" : "inactive"} 
    className={`card absolute w-[90%] h-[50%] md:h-[70%] ${variants} rounded-3xl flex justify-center inset-shadow-sm inset-shadow-white`}>
      <div className="w-full h-fit flex justify-between items-center px-5 py-3">
        <img src={`./${imgSrc}`} alt="" className={imgSize}/>
        <p className="relative w-fit flex justify-center items-center">
            <span className={`${showAll ? "scale-0 opacity-0 -translate-y-10" : "scale-100 opacity-100 translate-y-0"} delay-300 transition-all duration-300`}>******</span>
            <span className={`${showAll ? "scale-100 translate-y-0 opacity-100" : "scale-0 translate-y-20 opacity-0"} absolute delay-300 transition-all duration-300`}>{value}</span>
        </p>
      </div>
    </motion.div>
  )
}

export default Card