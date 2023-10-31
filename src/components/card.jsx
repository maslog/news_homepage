export default function Card({num, image, title, text}){
    return <div className="flex justify-between">
        <img src={image} className=" h-40 w-auto"/>
        <div className=" pl-3">
            <h3 className=" text-5xl text-gray-400 font-semibold">{num}</h3>
            <h4 className=" text-2xl font-bold">{title}</h4>
            <p>
            {text}
            </p>
        </div>
    </div>
}