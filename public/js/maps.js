document.addEventListener('DOMContentLoaded', function(){
  showMap();
})

async function getApiKey(){
  return await fetch('http://localhost:3000/getApiKey')
                  .then((response) => response.text())
                  .then((data) => data);
}

async function showMap(){
  let myApiKey = await getApiKey();

  let platform = new H.service.Platform({
      'apikey': `${myApiKey}`
    });

  // Obtain the default map types from the platform object:
  let defaultLayers = platform.createDefaultLayers();

  // Instantiate (and display) a map object:
  let map = new H.Map(
      document.querySelector('.map'),
      defaultLayers.vector.normal.map,
      {
        zoom: 15,
        center: { lat: -7.608095, lng: 110.203998 }
      });

  let marker = new H.map.Marker({lat: -7.608095, lng: 110.203998 });
  map.addObject(marker);

  let ui = H.ui.UI.createDefault(map, defaultLayers);
}
