import PropTypes from "prop-types";
import ContactItem from "../ContactItem/ContactItem"
import style from "./ContactList.module.css"

export default function ContactList({ contacts, delet }) {
    return (
        <ul className={style.list}>
          {contacts.map(contact => {
            return (
                <ContactItem key={contact.id} contact={contact} delet={delet}/>
            )
          })}
        </ul>
    )
}

// ContactList.propTypes = {
//     contacts: PropTypes.array.isRequired,
//     delet: PropTypes.func.isRequired,
// }