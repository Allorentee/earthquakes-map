export const MAP_DARK = 'mapbox://styles/mapbox/dark-v9'
export const MAP_LIGHT = 'mapbox://styles/mapbox/light-v9'
export const INITIAL_VIEW = {
  longitude: -4.454161090963652,
  latitude: 40.51369343176478,
  zoom: 1.4
}
export const FOG = {
  color: 'rgb(186, 210, 235)', // Lower atmosphere
  'high-color': 'rgb(36, 92, 223)', // Upper atmosphere
  'horizon-blend': 0.005, // Atmosphere thickness (default 0.2 at low zooms)
  'space-color': 'rgb(11, 11, 25)', // Background color
  'star-intensity': 0.6 // Background star brightness (default 0.35 at low zoooms )
}
