import React, { Component } from 'react';
import './App.css';
import Current from './components/Current';
import FiveDay from './components/FiveDay';
import Form from './components/Form';

class App extends Component {

    state = {
            location: undefined,
            temperature: undefined,
            weather: undefined,
            hourly: [],
    };

    weatherData = async (e) => {
        e.preventDefault();
        const location = e.target.elements.location.value;
        try {
            const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}, us&APPID=0df5d35b0375ba9176af78d1038ccf76&units=imperial`);
            const json = await response.json();
            console.log(json);
            const responseB = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${location}, us&APPID=0df5d35b0375ba9176af78d1038ccf76&units=imperial`);
            const jsonB = await responseB.json();
            console.log(jsonB);
            this.setState({
                location: json.name,
                temperature: Math.round(json.main.temp),
                weather: json.weather[0].main,
                hourly: jsonB.list.slice(0,8),
            })
        } catch(error) {
            console.log(error);
        }
    };

    weatherDefault = async (e) => {
        const location = 'Denver';
        try {
            const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}, us&APPID=0df5d35b0375ba9176af78d1038ccf76&units=imperial`);
            const json = await response.json();
            console.log(json);
            const responseB = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${location}, us&APPID=0df5d35b0375ba9176af78d1038ccf76&units=imperial`);
            const jsonB = await responseB.json();
            console.log(jsonB);
            this.setState({
                location: json.name,
                temperature: Math.round(json.main.temp),
                weather: json.weather[0].main,
                hourly: jsonB.list.slice(0,8),
            })
        } catch(error) {
            console.log(error);
        }
    };

    componentDidMount(){
        this.weatherDefault();
    }

    render() {
      return (
        <div className="App">
          <Current
              location={this.state.location}
              temperature={this.state.temperature}
              weather={this.state.weather}
          />
          <FiveDay hourly={this.state.hourly}/>
          <Form weatherData={this.weatherData}/>
        </div>
      );
    }
};


export default App;
