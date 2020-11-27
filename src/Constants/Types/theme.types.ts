import variables from '../../Styles/variables.scss'

export enum Theme {
  LIGHT = 'LIGHT',
  DARK = 'DARK'
}

export type ColorScheme = {
  color: string
  backgroundColor: string
  borderColor: string
  borderStyle: string
}

export const colorSchemeLight: ColorScheme = {
  color: variables.textColor,
  backgroundColor: 'white',
  borderColor: 'black',
  borderStyle: 'solid',
}

export const colorSchemeDark: ColorScheme = {
  color: 'white',
  backgroundColor: 'darkviolet',
  borderColor: 'darkviolet',
  borderStyle: 'solid',
}

export type Colors = {
  [theme in Theme]?: ColorScheme
}

export const ColorsTheme: Colors = {
  [Theme.DARK]: colorSchemeDark,
  [Theme.LIGHT]: colorSchemeLight,
}
