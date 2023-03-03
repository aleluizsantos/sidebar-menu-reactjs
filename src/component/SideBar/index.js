import React, {useState} from "react";

import { BsApple, BsChatLeft, BsLock } from "react-icons/bs";
import { IoHelpOutline } from "react-icons/io5";
import { BiUser } from "react-icons/bi";
import { TfiSettings } from "react-icons/tfi";
import { AiOutlineExport, AiOutlineHome } from "react-icons/ai";

const Sidebar = () => {
    const [toggle, setToggle] = useState("")

    function handleToggle(event) {
        setToggle(toggle === "" ? "active" : "")
    }
    return (
        <div className={`navigation ${toggle}`}>
            <ul>
                <li>
                    <a href="">
                        <span className="icon"><BsApple  size={28}/></span>
                        <span className="title">Brand Name</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <span className="icon"><AiOutlineHome  size={28}/></span>
                        <span className="title">Dashboard</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <span className="icon"><BiUser  size={28}/></span>
                        <span className="title">Customers</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <span className="icon">< BsChatLeft  size={28}/></span>
                        <span className="title">Messages</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <span className="icon"><IoHelpOutline  size={28}/></span>
                        <span className="title">Help</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <span className="icon"><TfiSettings  size={28}/></span>
                        <span className="title">Setting</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <span className="icon"><BsLock  size={28}/></span>
                        <span className="title">Password</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className="icon"><AiOutlineExport  size={28}/></span>
                        <span className="title">Sing Out</span>
                    </a>
                </li>
            </ul>
            <div onClick={handleToggle} className="toggle"></div>
        </div>
    )
}

export default Sidebar