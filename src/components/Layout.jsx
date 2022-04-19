import {Header} from "./Header"
import {Footer} from "./Footer"
import { Outlet } from "react-router-dom"
 

 const Layout = () => {
     return (
         <div className="App">
        <Header />
        <main className="main">
        <Outlet/>
        </main>
        <Footer />
        </div>
     )
 }

 export {Layout}