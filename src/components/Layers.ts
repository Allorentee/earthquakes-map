import type { HeatmapLayer, LayerProps } from 'react-map-gl'

const MAX_ZOOM_LEVEL = 9

export const heatmapLayer: HeatmapLayer = {
  id: 'heatmap',
  maxzoom: MAX_ZOOM_LEVEL,
  type: 'heatmap',
  paint: {
    // Increase the heatmap weight based on frequency and property magnitude
    'heatmap-weight': ['interpolate', ['linear'], ['get', 'mag'], 0, 0, 6, 1],
    // Increase the heatmap color weight weight by zoom level
    // heatmap-intensity is a multiplier on top of heatmap-weight
    'heatmap-intensity': [
      'interpolate',
      ['linear'],
      ['zoom'],
      0,
      1,
      MAX_ZOOM_LEVEL,
      3
    ],
    // Color ramp for heatmap.  Domain is 0 (low) to 1 (high).
    // Begin color ramp at 0-stop with a 0-transparancy color
    // to create a blur-like effect.
    'heatmap-color': [
      'interpolate',
      ['linear'],
      ['heatmap-density'],
      0,
      'rgba(33,102,172,0)',
      0.2,
      'rgb(103,169,207)',
      0.4,
      'rgb(209,229,240)',
      0.6,
      'rgb(253,219,199)',
      0.8,
      'rgb(239,138,98)',
      0.9,
      'rgb(255,201,101)'
    ],
    // Adjust the heatmap radius by zoom level
    'heatmap-radius': [
      'interpolate',
      ['linear'],
      ['zoom'],
      0,
      2,
      MAX_ZOOM_LEVEL,
      20
    ],
    // Transition from heatmap to circle layer by zoom level
    'heatmap-opacity': ['interpolate', ['linear'], ['zoom'], 7, 1, 9, 0]
  }
}

export const pointLayer: LayerProps = {
  id: 'layer-with-pulsing-dot',
  type: 'symbol',
  source: 'dot-point',
  layout: {
    'icon-image': 'pulsing-dot'
  }
}

const size = 200
let context: CanvasRenderingContext2D
// This implements `StyleImageInterface`
// to draw a pulsing dot icon on the map.
export const pulsingDot = {
  width: size,
  height: size,
  data: new Uint8Array(size * size * 4),

  // When the layer is added to the map,
  // get the rendering context for the map canvas.
  onAdd: function () {
    const canvas = document.createElement('canvas')
    canvas.width = this.width
    canvas.height = this.height
    context = canvas.getContext('2d') as CanvasRenderingContext2D
  },

  // Call once before every frame where the icon will be used.
  render: function () {
    const duration = 1000
    const t = (performance.now() % duration) / duration

    const radius = (size / 6) * 0.2
    const outerRadius = (size / 3) * 0.7 * t + radius

    // Draw the outer circle.
    context.clearRect(0, 0, this.width, this.height)
    context.beginPath()
    context.arc(this.width / 2, this.height / 2, outerRadius, 0, Math.PI * 2)
    context.fillStyle = `rgba(110, 38, 38, ${1 - t})`
    context.fill()

    // Draw the inner circle.
    context.beginPath()
    context.arc(this.width / 2, this.height / 2, radius, 0, Math.PI * 2)
    context.fillStyle = 'rgba(110, 38, 38, 1)'
    context.strokeStyle = 'white'
    context.lineWidth = 2 + 2 * (1 - t)
    context.fill()
    context.stroke()

    // Update this image's data with data from the canvas.
    this.data = context.getImageData(2, 2, this.width, this.height).data

    // Continuously repaint the map, resulting
    // in the smooth animation of the dot.
    // Return `true` to let the map know that the image was updated.
    return true
  }
}
