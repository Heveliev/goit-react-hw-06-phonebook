// import {useState,useEffect} from 'react';
import { Section } from './Section/Section';
import {InputForm} from './InputForm/InputForm';
import {ContactList} from './ContactList/ContactList';
import { useSelector } from 'react-redux';
import {SearchContact} from './SearchContact/SearchContact';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';



const App = () => {
  const contacts = useSelector(state => state.contacts)

//   const [filter, setFilter] = useState('');
  
//   useEffect(()=>{localStorage.setItem('contacts', JSON.stringify(contacts))},[contacts])


// const  filterContactsFunc = ()=>{
//    const normaliaedFilter = filter.toLowerCase();
//   return contacts.filter(contact=>contact.name.toLowerCase().includes(normaliaedFilter));
//  }

  
//   const searchHandle = evt => {
//     const evtTarget = evt.currentTarget.value;
//     setFilter(evtTarget)
//   }



  return (
    <>
     <Section title='Phonebook' >
        <InputForm
        />
     </Section>
       <Section title='Contacts' >
        <SearchContact
          // value={filter}
          // onChange={searchHandle}
        />
        {contacts.length ? <ContactList/> : <p>Sorry but you don't have contacts!</p>} 
       </Section>
       </>
  )
}


export {App}