import web3 from "../assets/images/image-web-3-desktop.jpg";

export default function MainPoint() {
    return <div className=" col-span-8 bg-white">
        <img src={web3} />
        <div className="grid grid-cols-12 mt-4">
            <h1 className=" col-span-5 text-6xl font-extrabold ">The Bright future of Web 3.0?</h1>
            <div className="col-span-6 col-start-7 font-extralight text-xl text-gray-500">
                <p className="mb-5">  We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
                    But is it really fulfilling its promise?</p>
                <button className="border bg-orange-400 border-orange-400 h-auto  w-46 p-2 cursor-pointer font-semibold text-white">Read More</button>
            </div>
        </div>
    </div>
}