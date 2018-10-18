import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.getData = this.getData.bind(this);
      this.state = {
        quotes:[]
      }
  }
  componentDidMount(){
    this.getData()
  }
  getData(){
    const data = 
    fetch('https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=MSFT&apikey=V4FSZEGRS5V2FYKK')
    .then ( response => {
    if (response.ok) {
      return response.json()
    }
  })
  data.then((d) => {

    this.setState({
      quotes: d
        })
     })
  }
  render() {

    console.log(this.state.quotes["Global Quote"]);

    const quotes = this.state.quotes && Object.keys(this.state.quotes).map( (key)=>{
      
      const quote = this.state.quotes[key];
      console.log(quote["10. change percent"]);

      return(
        <div key={key}>{quote["10. change percent"]}</div>
          )
    })
    return (
      <div className="App">
      <h1>
          How Bill Gates is doing today
        </h1>
        {quotes}
      </div>
        );
  }
}

export default App;
