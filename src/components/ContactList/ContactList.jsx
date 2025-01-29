
import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { selectContacts } from "../../redux/contactsSlice";
import { selectFilter } from "../../redux/filtersSlice";

const ContactList = () => {
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectFilter);
    const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
    console.log(filter);
    
    return (
        <ul className={s.contactList}>
            {filteredContacts.map(contact => (<li className={s.contactItem} key={contact.id}>
                <Contact id={contact.id} name={contact.name} number={contact.number} />
            </li>))}
      
        </ul>
    );
};
export default ContactList;