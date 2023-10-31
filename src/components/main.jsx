import SidePoint  from "./sidePoint"
import MainPoint from "./mainPoint"

export default function Main(){
    return <div className="grid grid-cols-12 gap-8 ">
        <MainPoint />
        <SidePoint />
    </div>
}