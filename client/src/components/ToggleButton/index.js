import {useState} from "react";
import './styles.css'
const ToggleButton = ({buttonName, handleClick}) => {

    const [isSelected, setIsSelected] = useState(false)
    return (
        <button onClick={(e) => {
            handleClick(e);
            setIsSelected(!isSelected);
        }} className={isSelected ? "toggleButton selected" : "toggleButton"}>
            {buttonName}
        </button>
    );
}

export default ToggleButton;
