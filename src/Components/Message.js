import React, { useState } from 'react'
import Chat from './Chat'
import ContactList from './ContactList'
const contacts=[{id:0,name:"Aradhana",email:"aradhana@gmail.com"},
{id:1,name:"Aishwarya",email:"aishwarya@gmail.com"},
{id:2,name:"Jhon",email:"jhon@gmail.com"},
{id:3,name:"Harry",email:"harry@gmail.com"}]
const Message = () => {
    const [to,setTo]=useState(contacts[0])
  return (
    <>
<ContactList
        contacts={contacts}
        selectedContact={to}
        onSelect={contact => setTo(contact)}
      />
      <Chat contact={to} />
    </>
  )
}

export default Message