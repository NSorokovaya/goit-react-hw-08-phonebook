import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';

import { fetchContactsList, deleteContact } from "../../redux/contactThunk";
import { contactSelector } from '../../redux/selector';
import css from './ContactList.module.css';
const ContactList = () => {
  const contacts = useSelector(contactSelector.getFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsList());
  }, [dispatch])

  const onDeleteContact = (id) => {
    dispatch(deleteContact(id));
  }
return (
    <ul className={css.list}>
      {
        contacts.map((contact) => (
          <li className={css.name} key={contact.id}>
            <span>{contact.name}: {contact.number}</span>
            <button className={css.btn} onClick={() => onDeleteContact(contact.id)}>Delete</button>
          </li>
        ))
      }
    </ul>
  );
}

export default ContactList;

