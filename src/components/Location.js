import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const Location = {
  width: '64%',
  height: '50%'
};

export class MapContainer extends Component {
  render() {
    return (
      <div className='container'>
      <Map
        google={this.props.google}
        zoom={11}
        style={Location}
        initialCenter={{
            lat: 12.9716,
            lng: 77.5946
        }}
      />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAIHOzM3jKCETx6Oi0PehXjX8QNOTE_wYk'
})(MapContainer);