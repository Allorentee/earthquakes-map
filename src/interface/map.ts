// Generated by https://quicktype.io

export interface HoverEvent {
  feature: Feature
  x: number
  y: number
}

export interface Feature {
  type: string
  state: State
  geometry: Geometry
  properties: Properties
  layer: Layer
  source: string
}

export interface Geometry {
  type: string
  coordinates: number[]
}

export interface Layer {
  id: string
  type: string
  source: string
  maxzoom: number
  paint: Paint
  layout: State
}

export interface State {}

export interface Paint {
  'heatmap-weight': number
  'heatmap-intensity': number
  'heatmap-color': boolean
  'heatmap-radius': number
  'heatmap-opacity': number
}

export interface Properties {
  id: string
  mag: number
  time: number
  tsunami: number
}

// Generated by https://quicktype.io

export interface HovInfo {
  feature: any
  x: number
  y: number
}
