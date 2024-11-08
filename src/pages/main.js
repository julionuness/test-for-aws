import { Routes, Route } from "react-router-dom";
import Home from "./home";
import Menu from "./menu";
import Contacts from "./contacts";

const Main = () => (
<Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/menu" element={<Menu/>}/>
    <Route exact path="/contacts" element={<Contacts/>}/>
</Routes>
)
export default Main;