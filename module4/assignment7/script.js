const KARAMALMIN_KAMPUS = [60.2239959, 24.755939];
const SUBSCRIPTION_KEY = null;

const map = L.map("map").setView(KARAMALMIN_KAMPUS, 16);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const apiQuery = document.getElementById("query").value;
  const response = await fetch(
    `https://api.digitransit.fi/geocoding/v1/search?text=${apiQuery}&size=1`,
    {
      method: "GET",
      headers: {
        Authorization: "Primary: digitransit-developer-api",
        "Cache-Control": "no-cache",
        "digitransit-subscription-key": SUBSCRIPTION_KEY,
      },
    },
  );
  const jsonResponse = await response.json();

  const karamalminKampus = new L.LatLng(...KARAMALMIN_KAMPUS);
  const destination = new L.LatLng(jsonResponse.bbox[1], jsonResponse.bbox[0]);

  const GQLQuery = ` {
    plan(
      from: {lat: ${destination.lat}, lon: ${destination.lng}}
      to: {lat: ${karamalminKampus.lat}, lon: ${karamalminKampus.lng}}
      numItineraries: 1
    ) {
      itineraries {
        legs {
          startTime
          endTime
          mode
          duration
          distance
          legGeometry {
            points
          }
        }
      }
    }
  }`;

  const routeResponse = await fetch(
    `https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql`,
    {
      method: "POST",
      headers: {
        Authorization: "Primary: digitransit-developer-api",
        "Cache-Control": "no-cache",
        "digitransit-subscription-key": SUBSCRIPTION_KEY,
        "Content-type": "application/json",
      },
      body: JSON.stringify({ query: GQLQuery }),
    },
  );
  const routeJsonResponse = await routeResponse.json();

  console.log(routeJsonResponse);

  const googleEncodedRoute = routeJsonResponse.data.plan.itineraries[0].legs;
  for (let i = 0; i < googleEncodedRoute.length; i++) {
    let color = "";
    switch (googleEncodedRoute[i].mode) {
      case "WALK":
        color = "gray";
        break;
      case "BUS":
        color = "blue";
        break;
      case "RAIL":
        color = "orange";
        break;
      case "TRAM":
        color = "green";
        break;
      default:
        color = "red";
        break;
    }
    const route = googleEncodedRoute[i].legGeometry.points;
    const pointObjects = L.Polyline.fromEncoded(route).getLatLngs(); // fromEncoded: convert Google encoding to Leaflet polylines
    L.polyline(pointObjects)
      .setStyle({
        color,
      })
      .addTo(map);
  }
  map.fitBounds([
    [karamalminKampus.lat, karamalminKampus.lng],
    [destination.lat, destination.lng],
  ]);
  const startTime = new Date(googleEncodedRoute[0].startTime);
  const endTime = new Date(
    googleEncodedRoute[googleEncodedRoute.length - 1].endTime,
  );

  document.getElementById("trip-length").innerHTML =
    `<p>Start time: ${startTime.toLocaleTimeString()}</p><p>End time: ${endTime.toLocaleTimeString()}</p>`;
});
