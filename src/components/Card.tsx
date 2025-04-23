interface CardProps {
    imgSrc: string;
    value: string;
    variants?: string;
    imgSize?: string;
}

const Card = ({imgSrc, value, variants, imgSize}: CardProps) => {
  return (
    <div className={`card absolute w-[90%] h-[70%] ${variants} rounded-3xl flex justify-center inset-shadow-sm inset-shadow-white`}>
      <div className="w-full h-fit flex justify-between items-center px-5 py-3">
        <img src={`./${imgSrc}`} alt="" className={imgSize}/>
        <p className="">{value}</p>
      </div>
    </div>
  )
}

export default Card