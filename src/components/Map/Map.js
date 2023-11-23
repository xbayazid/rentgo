import React from 'react';


const Map = ({property}) => {
  const {location, area} = property
  const splite = location.split(",");
  const area1 = splite[2].replaceAll(' ', '')
  let mainLocation = '';
  if(area? (area === 'Uttara'): false){
    mainLocation = area1.replace('-', ' sector ')+splite[1].replace(': ', ' ')+splite[3]+splite[4];
  }
  else{
    mainLocation = area?.replace(' ', '')+splite[1].replace(': ', ' ')+splite[3]+splite[4];
  }
  // const lo = location.replace('  ', ' ')
  const newLo = mainLocation.replaceAll(' ', '+')
    console.log(newLo)
    
    return (
        // Important! Always set the container height explicitly
        <div style={{maxWidth: "100%", listStyle: "none",transition: "none",overflow:'hidden',width:'100vw',height:'300px' }}>
          <div id="embed-map-canvas" style={{height: '100%',width: '100%', maxWidth: '100%'}}>
            <iframe title='location' style={{height: '100%', width: '100%'}}  frameBorder="0" src={`https://www.google.com/maps/embed/v1/search?q=${newLo}&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`}></iframe>
          </div>
          <a class="google-maps-html" href="https://www.bootstrapskins.com/themes" id="authorize-map-data">{location}</a></div>
    );
};

export default Map;