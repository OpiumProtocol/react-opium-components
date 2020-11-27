import colors from '../../Styles/exportColors.scss'

const {
  gray1,
  gray2,
  gray3,
  gray4,
  gray6,
  gray6_30,
  white0,
  red0,
  red0_20,
  green1,
  green1_30,
  yellow3,
  blue1,
  darkgray1,
  darkgray2,
  darkgray4,
  darkgray6,
  transparent0,
} = colors

export enum ETheme {
  LIGHT = 'LIGHT',
  DARK = 'DARK'
}

type TColorSet = {
  primary: string,
  secondary: string,
  danger: string,
  success: string,
  warning: string,
}

export type TColorScheme = {
  color: TColorSet
  backgroundColor: TColorSet
  borderColor: TColorSet
  borderStyle: string
}

export const colorSchemeLight: TColorScheme = {
  color: {
    primary: blue1,
    secondary: gray2,
    danger: red0,
    success: gray2,
    warning: gray3,
  },
  backgroundColor: {
    primary: white0,
    secondary: gray6_30,
    danger: red0_20,
    success: green1_30,
    warning: yellow3,
  },
  borderColor: {
    primary: blue1,
    secondary: gray4,
    danger: transparent0,
    success: transparent0,
    warning: transparent0,
  },
  borderStyle: 'solid',
}

export const colorSchemeDark: TColorScheme = {
  color: {
    primary: darkgray4,
    secondary: darkgray6,
    danger: red0,
    success: white0,
    warning: white0,
  },
  backgroundColor: {
    primary: darkgray1,
    secondary: darkgray2,
    danger: red0_20,
    success: green1_30,
    warning: yellow3,
  },
  borderColor: {
    primary: darkgray2,
    secondary: darkgray2,
    danger: transparent0,
    success: transparent0,
    warning: transparent0,
  },
  borderStyle: 'solid',
}

export type TThemes = {
  [theme in ETheme]?: TColorScheme
}

export const themes: TThemes = {
  [ETheme.DARK]: colorSchemeDark,
  [ETheme.LIGHT]: colorSchemeLight,
}
