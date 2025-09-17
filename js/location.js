const LAT = 34.910605;
const LNG = 33.637915;

window.initMap = () => {
  const map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: LAT, lng: LNG},
    zoom: 4
  });	

  const marker = new google.maps.Marker({
	position: {lat: LAT, lng: LNG},
	map,
	icon: {
		url: 'images/my_location.png',
		scaledSize: new google.maps.Size(40, 40)
	},
    animation: google.maps.Animation.BOUNCE
  });

  const infowindow = new google.maps.InfoWindow({
	content: "<h1>Cyprus, Larnaca</h1>"
  });

  marker.addListener('click', () => {
	if (infowindow.getMap()) {
		infowindow.close()
	} else {
		infowindow.open(map, marker);
	}
  });
}