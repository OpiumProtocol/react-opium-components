export enum Theme {
  LIGHT = 'LIGHT',
  DARK = 'DARK'
}

type ColorScheme = {
  color: string
  backgroundColor: string
  borderColor: string
  borderStyle: string
}

export const colorSchemeLight = {
  color: 'black',
  backgroundColor: 'white',
  borderColor: 'black',
  borderStyle: 'solid',
}

export const colorSchemeDark = {
  color: 'white',
  backgroundColor: 'darkviolet',
  borderColor: 'darkviolet',
  borderStyle: 'solid',
}

export type Colors = {
  [theme in Theme]?: ColorScheme
}
