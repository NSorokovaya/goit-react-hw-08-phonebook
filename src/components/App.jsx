import { useSelector } from 'react-redux';

import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import css from './App.module.css';
import { contactSelector } from '../redux/selector';
import { Loading } from 'notiflix/build/notiflix-loading-aio';



export const App = () => {
const loading = useSelector(contactSelector.getLoading);

  return (
    <>
      {loading ? Loading.dots() : Loading.remove()}
      <div className={css.thumb}>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </>
  );
};