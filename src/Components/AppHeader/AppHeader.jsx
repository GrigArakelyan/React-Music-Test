import "./appHeader.css"
import PlayAllButton from "../Buttons/PlayAllButton/PlayAllButton"
import InputFilter from "../Inputs/InputFilter"
import TruckNumButton from "../Buttons/TruckNumButton/TruckNumButton"
import AddAllButton from "../Buttons/AddAllButton/AddAllButton"
import BasicModal from "../Modal/Modal"
import { useState } from "react"

const AppHeader = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return (
        <header className="header">
            <div className="flex">
                <PlayAllButton />
                <AddAllButton addButtonClick={handleOpen}/>
                <div className="hidden">
                <BasicModal handleClose={handleClose} open={open} handleOpen={handleOpen}/>
                </div>
            </div>
            <div className="flex">
                <TruckNumButton />
                <InputFilter/>
            </div>
        </header>
    )
}

export default AppHeader