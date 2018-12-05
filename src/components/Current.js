import React from 'react';
import '../style/Current.css';
import { WiDaySunny } from 'weather-icons-react';
import { WiCloudy } from 'weather-icons-react';
import { WiRain } from 'weather-icons-react';
import { WiSnow } from 'weather-icons-react';

class Current extends React.Component {
    render() {
        return(
            <div className='current'>
              <div className='current-inner'>
                  <section className='currentIcon left'>
                    {this.props.weather === 'Clear' &&
                        <WiDaySunny size={250} color='#ffff00' />
                    }
                    {this.props.weather === 'Snow' &&
                        <WiSnow size={250} color='#fff' />
                    }
                    {this.props.weather === 'Rain' &&
                        <WiRain size={250} color='#499df5' />
                    }
                    {this.props.weather === 'Clouds' &&
                        <WiCloudy size={250} color='#a9acb6' />
                    }
                  </section>
                  <div className='details'>
                      <p className='current-detail current-loc'>{this.props.location}</p>
                      <p className='current-detail current-temp'>{this.props.temperature}°</p>
                  </div>
              </div>
            </div>
        );
    }
}

export default Current;
