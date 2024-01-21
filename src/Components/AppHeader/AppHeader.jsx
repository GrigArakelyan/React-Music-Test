import "./appHeader.css"
import AddAllButton from "../Buttons/AddAllButton/AddAllButton"
import PlayAllButton from "../Buttons/PlayAllButton/PlayAllButton"
import InputFilter from "../Inputs/InputFilter"
import TruckNumButton from "../Buttons/TruckNumButton/TruckNumButton"

const AppHeader = () => {


    return (
        <header className="header">
            <div className="flex">
                <PlayAllButton />
                <AddAllButton />
            </div>
            <div className="flex">
                <TruckNumButton />
                <InputFilter/>
            </div>
        </header>
    )
}

export default AppHeader