import React, { useState } from 'react'
import { send } from 'emailjs-com';
const Chat = ({contact}) => {
    const [text,setText]=useState('')
    const handleClick=()=>{
    //     console.log(contact.email)
    // var data = {
    //   to_email:contact.email,
    // };

    // emailjs.send(SERVICE_ID, TEMPLATE_ID, data, USER_ID).then(
    //   function (response) {
    //     console.log(response.status, response.text);
    //   },
    //   function (err) {
    //     console.log(err);
    //   }
    // );
    }
  return (
    <>
    <section>
    <textarea type="text"
    value={text}
    onChange={e=>setText(e.target.value)}
    placeholder={"chat to " +contact.name}/>
    <br/>
    <button onClick={handleClick}>send email to {contact.email}</button>
    </section>
    </>
  )
}

export default Chat