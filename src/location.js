import React from 'react';
import PropTypes from 'prop-types';
import {usePosition} from './usePosition';

export const Demo = ({watch, settings}) => {
  const {
    latitude,
    longitude,
    timestamp,
    accuracy,
    error,
  } = usePosition(watch, settings);

  return (
    <>
      {!latitude && !error && <><div>Trying to fetch location...</div><br/></>}
      {error && <><div>Trying to fetch ...</div><br/></>}

      <code>
        latitude: {latitude}<br/>
        longitude: {longitude}<br/>
        timestamp: {timestamp}<br/>
        accuracy: {accuracy && `${accuracy}m`}<br/>
        error: {error}
      </code>
    </>
  );
};

Demo.propTypes = {
  watch: PropTypes.bool,
  settings: PropTypes.object,
};


//********************************************************************** */

/* 
import React from "react";

export default class Test extends React.Component {
  render () {
    return (
        <div className="application">
                <script src="https://use.typekit.net/foobar.js"></script>
                <script>console.log('ssssssssssssssssssssssssssssssss');

              </script>
            ...
        </div>
    );
  }
};


import React from 'react';

export default class Test extends React.Component {
   constructor(props) {
    super(props);
  } 

  componentDidMount() {
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.innerHTML = `var x = document.getElementById("demo");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude; 
}
`
document.write('This is output by document.write()!');
    this.instance.appendChild(s);
  }

  render() {
    return <div ref={el => (this.instance = el)} />;
  }
}


*/