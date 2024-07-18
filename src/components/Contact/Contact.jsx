import style from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";

function Contact({ contact, deleteContact }) {
  const removeContact = () => {
    deleteContact(contact.id);
  };
  return (

    <div className={style.wraper}>
      <ul className={style.contactInfo}>
        <li className={style.contactItem}>
          <FaUser />
          {contact.name}
        </li>
        <li className={style.contactItem}>
          <FaPhoneVolume />
          {contact.number}
        </li>
      </ul>
      <button className={style.delete} type="button" onClick={removeContact}>
        Delete
      </button>
    </div>
  );
}

export default Contact;
