import { IoMdEye, IoMdEyeOff } from "react-icons/io"
import Card from "./components/Card"
import { useContext } from "react";
import { AppContext } from "./context/AppContext";

function App() {
  const { showAll, setShowAll } = useContext(AppContext);

  return (
    <div className="w-full h-screen flex justify-center items-center bg-green-100">
      <div className="relative w-[40%] h-[70%] flex flex-col justify-center items-center gap-2 p-2 bg-white rounded-t-3xl rounded-b-[80px] shadow-2xl overflow-hidden">
        <div className="bg-black/80 absolute w-[400px] h-[50px] bottom-20 blur-2xl z-0"></div>
        <div className="relative bg-[#293c1e] w-[65%] h-[65%] rounded-t-3xl rounded-b-[65px] flex justify-center items-center">
          <div className="cards w-full h-full flex flex-col justify-center items-center gap-2">
            <Card 
              imgSrc="stripe.png"
              value={showAll ? "$32,495" : "******"}
              variants="-top-7 bg-[#A5A7EE] text-white"
              imgSize="w-[20%]"
            />
            <Card 
              imgSrc="wise.png"
              value={showAll ? "$45,654" : "******"}
              variants="top-3 bg-[#91D46C] text-[#797a77]"
              imgSize="w-[20%]"
            />
            <Card 
              imgSrc="paypal.png"
              variants="bg-[#d6d6d4] text-[#797a77]"
              value={showAll ? "$345,865" : "******"}
              imgSize="w-[25%]"
            />
          </div>

          <div className="pocket flex flex-col items-center justify-between absolute bg-[#1F2F16] w-[95%] h-[68%] bottom-2 left-[10] py-5 border-2 border-[#45583a] border-dashed rounded-b-[65px] text-white">
            <div className="relative w-full h-fit flex flex-col justify-center items-center text-white/50">
              <p className={`total flex justify-center items-center font-extralight text-3xl ${showAll ? "text-neutral-300 tracking-normal" : "text-white/50 tracking-widest"}`}>{showAll ? "424,014" : "******"}</p>
              <p className="text-sm">Total Balance</p>
            </div>
            <div className="text-4xl" onClick={() => setShowAll(!showAll)}>
              {showAll ? <IoMdEye className="text-[#7aab62]"/> :
              <IoMdEyeOff className="text-[#7aab62]/20"/>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
