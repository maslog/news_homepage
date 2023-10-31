import Logo from "../assets/images/logo.svg"

export default function Header() {
    return <div className="flex justify-stretch mb-8 ">
        <div className="logo flex-1 pl-2">
            <img src={Logo} className=" justify-self-end"/>
        </div>

        <div className="nav flex-1">
            <ul className=" flex inline-block gap-10 justify-end">
                <li><a href="https://fast.com/">Home</a></li>
                <li><a href="#">New</a></li>
                <li><a href="#">Popular</a></li>
                <li><a href="#">Trending</a></li>
                <li><a href="#">Categories</a></li>
            </ul>
        </div>
    </div>
}