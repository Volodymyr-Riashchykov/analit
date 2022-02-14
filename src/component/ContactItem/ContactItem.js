import PropTypes from "prop-types";
import style from "./ContactItem.module.css";

// const date = "xxxx-xx-xxxxx:xx:xx.xxxZ"
const sum = 0;
const ras = 0;
export default function ContactItem({contact,delet}) {
    return (
        <li className={style.item}>
            {/* <p>{contact.name}:</p> */}
            {/* <p>результат:</p> */}
            <button
                className={style.button}
                onClick={()=>delet(contact[1]._id)}
            >результат:</button>
            <p>{contact[2] !== undefined ? contact[2].date :
                 contact[1]!== undefined ? contact[1].date : "не открыт" }</p>
            <p>{contact[3]!==undefined ? contact[3].date : "не закрыт"}</p>
            <p>{contact[0].res!==undefined ? contact[0].res.toFixed(2): ''}</p>
            {/* <p>{contact[0].res !== undefined ? a:(contact[0].res >= 0 ? sum++ : ras++) : ""}</p>
            {/* <p>общее количество:{sum + ras}</p> */}
            {/* <button
                className={style.button}
                onClick={()=>delet(contact.id)}
            >delete</button> */}
        </li>
    )
}

// ContactItem.propTypes = {
//     contact: PropTypes.object.isRequired,
//     delet: PropTypes.func.isRequired,
// }