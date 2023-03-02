import { ContactItem } from "components/ContactItem/ContactItem";
// import PropTypes from 'prop-types';
import { useSelector,  } from 'react-redux';




export const ContactList = () => {
    const contacts = useSelector(state => state.contacts);

return(
    <>
    <ul>
        {contacts.map(contact=><ContactItem 
        key={contact.id} 
        id={contact.id} 
        name={contact.name} 
        number={contact.number}

        />)}
        
    </ul>
    </>
)
}

// ContactList.propTypes ={
//     values: PropTypes.array.isRequired,
//     onDeleteContact: PropTypes.func.isRequired
// }