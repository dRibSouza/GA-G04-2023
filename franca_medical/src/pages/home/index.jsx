import Content from "../../components/Content";

import '../../App.css'
import { Navbar } from "../../components/Navbar";

export const Home = () => {
    return (
        <div className="App">
            <Navbar />
            <div className="main">

            </div>
            <Content />
        </div>
    );
}