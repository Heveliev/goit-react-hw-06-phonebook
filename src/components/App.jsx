
import { Section } from './Section/Section';
import {InputForm} from './InputForm/InputForm';
import {ContactList} from './ContactList/ContactList';
import { useSelector } from 'react-redux';
import {SearchContact} from './SearchContact/SearchContact';



const App = () => {
  const contacts = useSelector(state => state.contacts.items)

  return (
    <>
     <Section title='Phonebook' >
        <InputForm
        />
     </Section>
       <Section title='Contacts' >
        <SearchContact/>
                  {contacts.length ?
          <ContactList />
          : <p>Sorry but you don't have contacts!</p>} 
       </Section>
       </>
  )
}


export {App}