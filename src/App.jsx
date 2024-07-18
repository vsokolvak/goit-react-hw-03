import { useEffect, useState } from 'react';
import ContactList from './components/ContactList/ContactList';
import initialData from './data/contact.json'
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';

function App() {
  const [search, changeSearch] = useState("");
  const [data, setData] = useState(() => {
    const localData = localStorage.getItem("contactData");
    if (localData) return JSON.parse(localData);
    return initialData;
  });

  //data set to localstorage
  useEffect(() => {
    localStorage.setItem("contactData", JSON.stringify(data));
  }, [data]);

  const inputSearch = (value) => {
    changeSearch(value);
  };

  const addContact = (newContact) => {
    setData([...data, newContact]);
  };

  const deleteContact = (id) => {
    setData(
      data.filter((el) => {
        if (el.id !== id) return el;
      })
    );
  };

  const filterData = data.filter((el) =>
    el.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addNewContact={addContact} />
      <SearchBox value={search} onInput={inputSearch} />
      <ContactList contactList={filterData} deleteContact={deleteContact} />
    </div>
  );
}

export default App
