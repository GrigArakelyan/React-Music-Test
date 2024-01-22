import "./input.css"
import searchIcon from "../../icons/search.png"
import { useState } from "react"

const InputFilter = () => {

    const [text, setText] = useState('');


    return(
        <div className="inputDiv">
            <img src={searchIcon} className="icon" alt="menu"/>
            <input className="input" type="text" placeholder="Filter" onChange={e => setText(e.target.value)}/>
        </div>
    )
}

export default InputFilter