import React from 'react';
import '../style/Form.css';

class Form extends React.Component {
    render() {
        return(
            <form onSubmit={this.props.weatherData} className='form'>
                <input className='input' type="text" name="location" placeholder="city..."/>
                <button>+</button>
            </form>
        );
    }
}

export default Form;
