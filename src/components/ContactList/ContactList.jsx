import { ContactItem } from "components/ContactItem/ContactItem";

import { useSelector  } from 'react-redux';





export const ContactList = () => {

    const contacts = useSelector(state => state.contacts.items);
    const filter = useSelector(state => state.filter);

    const filterContacts = () => {
        return contacts.filter(contact=>contact.name.toLowerCase().includes(filter))
    }

return(
    <>
    <ul>
        {filterContacts().map(contact=><ContactItem 
        key={contact.id} 
        id={contact.id} 
        name={contact.name} 
        number={contact.number}

        />)}
        
    </ul>
    </>
)
}
