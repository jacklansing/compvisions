import React from 'react';

const DirectionsMap = (props) => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11731.963239273335!2d-73.764273!3d42.682737!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfa3de961198a0bfc!2sComputer%20Visions!5e0!3m2!1sen!2sus!4v1593615585964!5m2!1sen!2sus"
      // width="600"
      // height="450"
      frameBorder="0"
      aria-hidden="false"
      style={{ border: '1px solid black', height: '100%', width: '100%' }}
      title="computer visions location"
    />
  );
};

export default DirectionsMap;
