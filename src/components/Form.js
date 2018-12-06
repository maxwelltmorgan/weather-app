import React from 'react';
import '../style/Form.css';

class Form extends React.Component {
    render() {
        return(
            <form onSubmit={this.props.weatherData} className='form'>
                <div className='form-inner'>
                    <input className='input' type="text" name="location" placeholder="enter city name" width="120" autocomplete="off"/>
                    <button>+</button>
                </div>
            </form>
        );
    }
}

export default Form;
