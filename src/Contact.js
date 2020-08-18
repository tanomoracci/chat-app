import React from 'react'
import PropTypes from 'prop-types';
import './Contact.css'


class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            online: props.online,
        };
    }
    
    render() {
        return (
        <div className='Contact'>
            <img className='avatar' src={this.props.avatar} alt='pic' />

            <div>
                <h4 className='name'>{this.props.name}</h4>

                <div className='status' 
                    onClick={event => {
                        const status = !this.state.online;
                        this.setState({online: status});
                    } } >

                { this.state.online? 
                    <p className='status-text'> <span className='status-online'></span> online</p>:
                    <p className='status-text'> <span className='status-offline'></span> offline</p>
                }
                </div>

            </div>
        </div>
        )}
}

Contact.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    online: PropTypes.bool.isRequired,
}
export default Contact;

