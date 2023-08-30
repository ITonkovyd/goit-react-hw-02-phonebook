import ContactItem from 'components/ContactItem';
import { PropTypes } from 'prop-types';
import { Component } from 'react';
import { Ul } from './ContactList.styled';

export default class ContactList extends Component {
  render() {
    const { filteredContacts, handleDelete } = this.props;

    return (
      <Ul>
        {filteredContacts.map(contact => (
          <ContactItem
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
            handleDelete={handleDelete}
          />
        ))}
      </Ul>
    );
  }
}

ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleDelete: PropTypes.func.isRequired,
};
