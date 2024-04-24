import React from "react";

function Keypad (){
    function change(){
        console.log("Entering password...")
    }
    return (
        <div>
            <input onChange={change}  type="password"/>
        </div>
    )
}

export default Keypad;