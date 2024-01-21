import "./input.css"
import searchIcon from "../../icons/search.png"

const InputFilter = () => {
    return(
        <div className="inputDiv">
            <img src={searchIcon} className="icon" alt="menu"/>
            <input className="input" type="text" placeholder="Filter" />
        </div>
    )
}

export default InputFilter