import { MyContext } from "../App"
import { useContext } from "react"

//export default function Header({ appName }) {
export default function Header() {  
    const context = useContext(MyContext)
    
    return <h1>{ context.appName }</h1>
}
