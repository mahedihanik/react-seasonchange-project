import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component{

  state = { lat: null, errorMessage :'' };

  componentDidMount(){

    window.navigator.geolocation.getCurrentPosition(
      (Position)=> this.setState({lat :Position.coords.latitude}),
      (error)=> this.setState({errorMessage: error.message})
    )

  }
  renderContentHelper () {

    if(this.state.errorMessage && !this.state.lat){

      return <div>Error : {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {

      return <SeasonDisplay latitude = {this.state.lat}/>;
    }
    return <Spinner message="Please accept location request !"/>;

  }

    render(){
      return (
        <div className='border red'>

          {this.renderContentHelper()}

        </div>
      );
    }
}

ReactDOM.render(
  <App />,
  document.querySelector("#root")
)
 