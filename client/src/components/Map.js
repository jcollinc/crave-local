import GoogleMapReact from 'google-map-react';
import React from 'react';


class SimpleMap extends React.Component {
  
  // static defaultProps = {
  //   center: {lat: this.props.coords?.lat, lng: this.props.coords?.lng },
  //   zoom: 13
  // };

  // componentDidMount() {
  //   debugger
  // }

  render() {
    return (
      <div className="google-map">
        <GoogleMapReact
          center={this.props.coords}
          zoom={14}
        />
      </div> 
    );
  }
}


export default SimpleMap 
