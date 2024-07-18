import Contact from "../Contact/Contact";
import style from "./ContactList.module.css";

function ContactList({ contactList, deleteContact }) {
  return (
    <ul className={style.contactList}>
      {contactList.map((el) => (
        <li key={el.id}>
          <Contact contact={el} deleteContact={deleteContact} />
        </li>
      ))}
    </ul>
  );
}

export default ContactList;