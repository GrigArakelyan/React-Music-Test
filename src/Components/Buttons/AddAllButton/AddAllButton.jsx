import "../buttons.css"
import addIcon from "../../../icons/add.png"
import downIcon from "../../../icons/down.png"

const AddAllButton = ({addButtonClick}) => {

    return (
        <div className="buttonDiv" onClick={addButtonClick}>
            <button className="button" >
                <img src={addIcon} className="icon" alt="add"/>
                <span className="text">Add All</span>
                <div className="line"></div>
                <img src={downIcon} className="icon" alt="all"/>  
            </button> 
        </div>
    )
}

export default AddAllButton