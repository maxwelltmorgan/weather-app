import React from 'react';
import '../style/FiveDay.css';
import { WiDaySunny } from 'weather-icons-react';
import { WiCloudy } from 'weather-icons-react';
import { WiRain } from 'weather-icons-react';
import { WiSnow } from 'weather-icons-react';

class FiveDay extends React.Component {

    formatTime = (x) => {
        let date = new Date(x * 1000);
        let hours = date.getHours();
        let ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        let strTime = hours + ampm;
        return strTime;
    };

    render() {
        return(
            <ul className='five-day'>
                {this.props.hourly.map(hour => (
                    <li key={hour.dt}>
                    <p>{this.formatTime(hour.dt)}</p>
                    {hour.weather[0].main === 'Clear' &&
                        <WiDaySunny size={80} color='#ffff00' />
                    }
                    {hour.weather[0].main === 'Snow' &&
                        <WiSnow size={80} color='#fff' />
                    }
                    {hour.weather[0].main === 'Rain' &&
                        <WiRain size={80} color='#499df5' />
                    }
                    {hour.weather[0].main === 'Clouds' &&
                        <WiCloudy size={80} color='#a9acb6' />
                    }
                    <p>{Math.round(hour.main.temp)}°</p>
                    </li>
                ))}
            </ul>
        );
    }
}

export default FiveDay;
