import React,{useState} from "react";
import {NavLink} from "react-router-dom";

function Header () {

    const [userName,setUserName] = useState("stanley");

    return (
        <div className="header">
<nav>

    <NavLink to="/">Home</NavLink> {" "}
    <NavLink to="/expenses">Expenses</NavLink> {" "}
    <NavLink to="/chart">Chart</NavLink> {" "}


    <h4>Hello {userName}</h4>
            {
                userName ===  "" ?
                    <>  <button className="btn btn-primary">log-in</button> {" "}
                        <button className="btn btn-primary">register</button>
                    </>
                    :
                    (<button className="btn btn-primary">Log-out</button>)
            }    {" "}

</nav>
        </div>

    )
}

export default Header;