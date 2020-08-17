import React from 'react'
import './Contact.css'

function Contact (props) {

    return (
        <div className='Contact'>
            <img className='avatar' src={props.avatar} alt='pic' />

            <div>
                <h4 className='name'>{props.name}</h4>

                <div className='status'>
                { props.online? 
                    <p className='status-text'> <span className='status-online'></span> online</p>:
                    <p className='status-text'> <span className='status-offline'></span> offline</p>
                }
                </div>

            </div>
        </div>
    )
}

export default Contact;
