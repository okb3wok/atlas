import * as ymaps3 from 'ymaps3';

const map = {
    longitude: 51.725976,
    latitude: 36.178651,
    zoom: 16,
    mapID: "yamap",
    centerAuto: false,
    centerAutoX: 0,
    centerAutoY: 50,
    contact: {
      name: "Салон кухни Атлас-Люкс",
      address: "г. Курск, ул. Советская, д. 12",
      color: ''
    },

    init() {

      const coords = [this.latitude, this.longitude];
      const zoom = this.zoom;
      const mapID = this.mapID;
      const title = this.contact.name
      const address = this.contact.address
      async function initMap() {
        await ymaps3.ready;
        const {
          YMap,
          YMapDefaultSchemeLayer,
          YMapControls,
          YMapDefaultFeaturesLayer,
        } = ymaps3;
        const {
          YMapZoomControl,
          YMapGeolocationControl
        } = await ymaps3.import('@yandex/ymaps3-controls@0.0.1');

        // Import the package to add a default marker
        const {YMapDefaultMarker} = await ymaps3.import('@yandex/ymaps3-markers@0.0.1');


        const map = new YMap(document.getElementById(mapID),{
          location: {
            center: coords,
            zoom: zoom
          },
          behaviors: ['drag', 'pinchZoom', 'dblClick']
        });

        map.addChild(new YMapDefaultSchemeLayer());
        map.addChild(new YMapDefaultFeaturesLayer());


        const zoomControl = new YMapZoomControl({
        })


        map.addChild(new YMapControls({
          position: 'left'
        }).addChild(zoomControl));



        map.addChild(new YMapControls({
          position: 'top right'
        }).addChild(new YMapGeolocationControl({
        })));


        const marker = new YMapDefaultMarker({
          coordinates: coords,
          title: title,
          color: '#f04931',
          popup: {content: address, position: 'right'}
        });

        map.addChild(marker);

        // Кастомный маркер

        // const markerElement = document.createElement('img');
        // markerElement.className = 'icon-marker';
        // markerElement.src =''
        // markerElement.onclick = () => {
        //   console.log('Клик!')
        // }
        // map.addChild(new YMapMarker({coordinates: coords}, markerElement));

      }

      initMap();

    }

}

export default map;
