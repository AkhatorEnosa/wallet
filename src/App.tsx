import Card from "./components/Card"
import { useContext } from "react";
import { AppContext } from "./context/AppContext";
import { motion } from "framer-motion";
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  const { showAll, setShowAll } = useContext(AppContext);

  const animationVariants = {
    inactive: { 
      transition: { 
        duration: 1,
        staggerChildren: 0.05,
        bounce: 1,
        ease: "easeOut",
      } },
    active: {
      transition: { 
        duration: 6,
        staggerChildren: 0.05,
        bounce: 1,
        ease: "easeOut",
      } },
  }

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="relative w-[350px] md:w-[450px] lg:w-[40%] h-[70%] flex flex-col justify-center items-center gap-2 bg-white rounded-t-3xl rounded-b-3xl lg:rounded-b-[80px] shadow-2xl">
        {/* <div className="absolute w-full h-full opacity-20">
          <div className="absolute bg-amber-200 size-[60%] rounded-full rotate-12 left-0 top-0 blur-3xl"></div>
          <div className="absolute bg-green-300 size-[60%] rounded-full rotate-12 right-20 bottom-0 blur-3xl"></div>
        </div> */}
        <div className={`bg-black/95 absolute w-[80%] md:w-[400px] h-[50px] bottom-20 blur-2xl ${showAll ? "opacity-80" : "opacity-100"} delay-300 transitiona-all duration-300 z-0`}></div>

        <div className="relative bg-[#293c1e] min-w-[90%] h-[50%] md:w-[65%] md:h-[65%] rounded-t-3xl rounded-b-[65px] flex justify-center items-center">
          <motion.div
          variants={animationVariants}
          animate={showAll ? "active" : "inactive"}
          className="cards w-full h-full flex flex-col justify-center items-center gap-2">
            <Card 
              imgSrc="paypal.png"
              variants={`bg-[#d6d6d4] text-[#797a77] ${showAll ? "top-9 md:top-12" : "top-10 md:top-14"} z-30`}
              value={"$345,865"}
              imgSize="w-[25%]"
            />
            <Card 
              imgSrc="wise.png"
              value={"$45,654"}
              variants={`${showAll ? "top-0" : "top-3"} bg-[#91D46C] text-[#797a77] z-20`}
              imgSize="w-[20%]"
            />
            <Card 
              imgSrc="stripe.png"
              value={"$32,495"}
              variants={`${showAll ? "-top-10 md:-top-15" : "-top-7"} bg-[#A5A7EE] text-white z-10`}
              imgSize="w-[20%]"
            />
          </motion.div>

          <div className="pocket flex flex-col items-center justify-between absolute bg-[#1F2F16] w-[95%] h-[68%] bottom-2 left-[10] py-5 border-2 border-[#45583a] border-dashed  inset-shadow-sm inset-shadow-white/50 rounded-t-[8px] rounded-b-[65px] text-white z-50 overflow-clip">
            <div className="absolute pattern w-full h-full z-30"></div>
            <div className="relative w-full h-fit flex flex-col justify-center items-center text-white/50 z-40">
              <p className={`total relative w-full flex justify-center items-center font-extralight text-3xl ${showAll ? "text-neutral-300 tracking-normal" : "text-white/50 tracking-widest"} overflow-clip`}>
                <span className={`${showAll ? "scale-0 opacity-0 -translate-y-10" : "scale-100 opacity-100 translate-y-0"} delay-300 transition-all duration-300`}>******</span>
                <span className={`${showAll ? "scale-100 translate-y-0 opacity-100" : "scale-0 translate-y-20 opacity-0"} absolute delay-300 transition-all duration-300`}>$424,014</span>
              </p>
              <p className="text-sm">Total Balance</p>
            </div>
            <motion.div className="relative w-full flex justify-center items-center z-40" onClick={() => setShowAll(!showAll)}
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
            >

              <div className="relative w-fit border-[1px] border-[#7aab62] hover:bg-[#7aab62]/20 text-[#7aab62] px-3 py-2 rounded-full flex justify-center items-center bg-[#1F2F16] cursor-pointer overflow-hidden z-30">
                <i className={`w-full flex gap-2 justify-center items-center not-italic font-thin text-2xl bi bi-eye-slash-fill ${showAll ? "scale-100 opacity-100" : "scale-0 opacity-0"} delay-300 transition-all duration-400`}><span className="text-sm">Hide Balance</span></i>
                <i className={`absolute w-full flex gap-2 justify-center items-center not-italic font-thin text-2xl bi bi-eye-fill ${!showAll ? "scale-100 opacity-100" : "scale-0 opacity-0"} delay-300 transition-all duration-400`}><span className="text-sm">Show Balance</span></i>
              </div>

            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
