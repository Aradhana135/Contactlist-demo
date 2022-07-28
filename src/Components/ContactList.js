import React from "react";

const ContactList = ({ contacts, selectedContact, onSelect }) => {
  return (
    <>
      <section>
        <ul>
          {/* {contacts.map(contact=>{<li key={contact.id}>{contact.name}</li>})} */}
          {contacts.map((contact) => (
            <li key={contact.id}>
              <button
                onClick={() => {
                  onSelect(contact);
                }}
              >
                {contact.name}
              </button>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default ContactList;
