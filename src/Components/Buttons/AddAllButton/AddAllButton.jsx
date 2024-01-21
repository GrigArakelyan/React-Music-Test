import "../buttons.css"
import addIcon from "../../../icons/add.png"
import downIcon from "../../../icons/down.png"
import BasicModal from "../../Modal/Modal"
import { useRef } from "react"

const AddAllButton = () => {
    // const [open, setOpen] = useState(false);
    // const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);

    const buttonRef = useRef()
    const openModal = (cb) => {
        cb()
    }

    return (
        <div className="addButtonDiv">
            <button className="button">
                <img src={addIcon} className="icon" alt="menu"/>
                <span className="text">Add All</span>
                <div className="line"></div>
                <img src={downIcon} className="icon" alt="menu"/>  
            </button>
            {/* <BasicModal/> */}
        </div>
    )
}

export default AddAllButton