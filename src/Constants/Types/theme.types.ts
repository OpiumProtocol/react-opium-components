import _ from '../../Styles/exportColors.scss'

export enum ETheme {
  LIGHT = 'LIGHT',
  DARK = 'DARK',
}

export type TVariant =
  'primary' |
  'secondary' |
  'danger' |
  'success' |
  'warning' |
  'info' |
  'infoOnWhite' |
  'link' |
  'error'


export type TTooltipPlacement =
  'right' | 'top' | 'bottom' | 'left' | 
  'top-start' | 'top-end' | 
  'right-start' | 'right-end' | 
  'bottom-end' | 'bottom-start' | 
  'left-end' | 'left-start' | 
  'auto-start' | 'auto' | 'auto-end'

type TColorSet = {
  primary: { value: string, hover: string, disabled: string },
  secondary: { value: string, hover: string, disabled: string },
  danger: { value: string, hover: string, disabled: string },
  success: { value: string, hover: string, disabled: string },
  warning: { value: string, hover: string, disabled: string },
  info: { value: string, hover: string, disabled: string },
  infoOnWhite: { value: string, hover: string, disabled: string },
  link: { value: string, hover: string, disabled: string },
  error: { value: string, hover: string, disabled: string },
}

export type TColorScheme = {
  backgroundColor: TColorSet
  borderColor: TColorSet
  color: TColorSet
  borderStyle: string
}

// Components
export const colorSchemeDark: TColorScheme = {
  backgroundColor: {
    primary: { value: _.blue1, hover: _.transparent0, disabled: _.transparent0 },
    secondary: { value: _.transparent0, hover: _.blue1, disabled: _.transparent0 },
    danger: { value: _.red0_20, hover: _.red0_40, disabled: _.transparent0 },
    success: { value: _.green1, hover: _.green1_40, disabled: _.transparent0 },
    warning: { value: _.yellow3, hover: _.yellow3_70, disabled: _.transparent0 },
    info: { value: _.blue2_lighten, hover: _.blue2, disabled: _.transparent0 },
    infoOnWhite: { value: _.blue2, hover: _.blue2, disabled: _.transparent0 },
    link: { value: _.blue4, hover: _.blue4, disabled: _.transparent0 },
    error: { value: _.red0, hover: _.red0, disabled: _.transparent0 },
  },
  borderColor: {
    primary: { value: _.blue1, hover: _.blue1, disabled: _.gray4 },
    secondary: { value: _.blue1, hover: _.blue1, disabled: _.gray4 },
    danger: { value: _.transparent0, hover: _.transparent0, disabled: _.gray4 },
    success: { value: _.transparent0, hover: _.transparent0, disabled: _.gray4 },
    warning: { value: _.transparent0, hover: _.transparent0, disabled: _.gray4 },
    info: { value: _.transparent0, hover: _.transparent0, disabled: _.gray4 },
    infoOnWhite: { value: _.transparent0, hover: _.transparent0, disabled: _.gray4 },
    link: { value: _.transparent0, hover: _.transparent0, disabled: _.gray4 },
    error: { value: _.transparent0, hover: _.transparent0, disabled: _.gray4 },
  },
  color: {
    primary: { value: _.white0, hover: _.blue1, disabled: _.gray4 },
    secondary: { value: _.blue1, hover: _.white0, disabled: _.gray4 },
    danger: { value: _.red0_50, hover: _.red0, disabled: _.gray4 },
    success: { value: _.darkblue2, hover: _.white0, disabled: _.gray4 },
    warning: { value: _.darkblue2, hover: _.white0, disabled: _.gray4 },
    info: { value: _.white0, hover: _.white0, disabled: _.gray4 },
    infoOnWhite: { value: _.white0, hover: _.white0, disabled: _.gray4 },
    link: { value: _.white0, hover: _.white0, disabled: _.gray4 },
    error: { value: _.white0, hover: _.white0, disabled: _.gray4 },
  },
  borderStyle: 'solid',
}

export const colorSchemeLight: TColorScheme = {
  backgroundColor: {
    primary: { value: _.blue1, hover: _.transparent0, disabled: _.transparent0 },
    secondary: { value: _.transparent0, hover: _.blue1, disabled: _.transparent0 },
    danger: { value: _.red0_20, hover: _.red0_40, disabled: _.transparent0 },
    success: { value: _.green1, hover: _.green1_40, disabled: _.transparent0 },
    warning: { value: _.yellow3, hover: _.yellow3_70, disabled: _.transparent0 },
    info: { value: _.blue2_lighten, hover: _.blue2, disabled: _.transparent0 },
    infoOnWhite: { value: _.blue2, hover: _.blue2, disabled: _.transparent0 },
    link: { value: _.blue4, hover: _.blue4, disabled: _.transparent0 },
    error: { value: _.red0, hover: _.red0, disabled: _.transparent0 },
  },
  borderColor: {
    primary: { value: _.blue1, hover: _.blue1, disabled: _.gray4 },
    secondary: { value: _.blue1, hover: _.blue1, disabled: _.gray4 },
    danger: { value: _.transparent0, hover: _.transparent0, disabled: _.gray4 },
    success: { value: _.transparent0, hover: _.transparent0, disabled: _.gray4 },
    warning: { value: _.transparent0, hover: _.transparent0, disabled: _.gray4 },
    info: { value: _.transparent0, hover: _.transparent0, disabled: _.gray4 },
    infoOnWhite: { value: _.transparent0, hover: _.transparent0, disabled: _.gray4 },
    link: { value: _.transparent0, hover: _.transparent0, disabled: _.gray4 },
    error: { value: _.transparent0, hover: _.transparent0, disabled: _.gray4 },
  },
  color: {
    primary: { value: _.white0, hover: _.blue1, disabled: _.gray4 },
    secondary: { value: _.blue1, hover: _.white0, disabled: _.gray4 },
    danger: { value: _.red0, hover: _.red2, disabled: _.gray4 },
    success: { value: _.darkblue2, hover: _.white0, disabled: _.gray4 },
    warning: { value: _.darkblue2, hover: _.white0, disabled: _.gray4 },
    infoOnWhite: { value: _.gray2, hover: _.white0, disabled: _.gray4 },
    info: { value: _.white0, hover: _.white0, disabled: _.gray4 },
    link: { value: _.white0, hover: _.white0, disabled: _.gray4 },
    error: { value: _.white0, hover: _.white0, disabled: _.gray4 },
  },
  borderStyle: 'solid',
}

// Sections
export const SectionSchemeDark: TColorScheme = {
  backgroundColor: {
    primary: { value: _.darkblue1, hover: _.darkblue1, disabled: _.darkblue1 },
    secondary: { value: _.darkblue1, hover: _.darkblue1, disabled: _.darkblue1 },
    danger: { value: _.darkblue1, hover: _.darkblue1, disabled: _.darkblue1 },
    success: { value: _.darkblue1, hover: _.darkblue1, disabled: _.darkblue1 },
    warning: { value: _.darkblue1, hover: _.darkblue1, disabled: _.darkblue1 },
    info: { value: _.darkblue1, hover: _.darkblue1, disabled: _.darkblue1 },
    infoOnWhite: { value: _.darkblue1, hover: _.darkblue1, disabled: _.darkblue1 },
    link: { value: _.darkblue1, hover: _.darkblue1, disabled: _.darkblue1 },
    error: { value: _.darkblue1, hover: _.darkblue1, disabled: _.darkblue1 },
  },
  borderColor: {
    primary: { value: _.transparent0, hover: _.transparent0, disabled: _.transparent0 },
    secondary: { value: _.transparent0, hover: _.transparent0, disabled: _.transparent0 },
    danger: { value: _.transparent0, hover: _.transparent0, disabled: _.transparent0 },
    success: { value: _.transparent0, hover: _.transparent0, disabled: _.transparent0 },
    warning: { value: _.transparent0, hover: _.transparent0, disabled: _.transparent0 },
    info: { value: _.transparent0, hover: _.transparent0, disabled: _.transparent0 },
    infoOnWhite: { value: _.transparent0, hover: _.transparent0, disabled: _.transparent0 },
    link: { value: _.transparent0, hover: _.transparent0, disabled: _.transparent0 },
    error: { value: _.transparent0, hover: _.transparent0, disabled: _.transparent0 },
  },
  color: {
    primary: { value: _.white0, hover: _.white0, disabled: _.white0 },
    secondary: { value: _.white0, hover: _.white0, disabled: _.white0 },
    danger: { value: _.white0, hover: _.white0, disabled: _.white0 },
    success: { value: _.white0, hover: _.white0, disabled: _.white0 },
    warning: { value: _.white0, hover: _.white0, disabled: _.white0 },
    info: { value: _.white0, hover: _.white0, disabled: _.white0 },
    infoOnWhite: { value: _.white0, hover: _.white0, disabled: _.white0 },
    link: { value: _.white0, hover: _.white0, disabled: _.white0 },
    error: { value: _.white0, hover: _.white0, disabled: _.white0 },
  },
  borderStyle: 'solid',
}

export const SectionSchemeLight: TColorScheme = {
  backgroundColor: {
    primary: { value: _.gray7, hover: _.gray7, disabled: _.gray7 },
    secondary: { value: _.darkblue1, hover: _.darkblue1, disabled: _.darkblue1 },
    danger: { value: _.darkblue1, hover: _.darkblue1, disabled: _.darkblue1 },
    success: { value: _.darkblue1, hover: _.darkblue1, disabled: _.darkblue1 },
    warning: { value: _.darkblue1, hover: _.darkblue1, disabled: _.darkblue1 },
    info: { value: _.darkblue1, hover: _.darkblue1, disabled: _.darkblue1 },
    infoOnWhite: { value: _.darkblue1, hover: _.darkblue1, disabled: _.darkblue1 },
    link: { value: _.darkblue1, hover: _.darkblue1, disabled: _.darkblue1 },
    error: { value: _.darkblue1, hover: _.darkblue1, disabled: _.darkblue1 },
  },
  borderColor: {
    primary: { value: _.transparent0, hover: _.transparent0, disabled: _.transparent0 },
    secondary: { value: _.transparent0, hover: _.transparent0, disabled: _.transparent0 },
    danger: { value: _.transparent0, hover: _.transparent0, disabled: _.transparent0 },
    success: { value: _.transparent0, hover: _.transparent0, disabled: _.transparent0 },
    warning: { value: _.transparent0, hover: _.transparent0, disabled: _.transparent0 },
    info: { value: _.transparent0, hover: _.transparent0, disabled: _.transparent0 },
    infoOnWhite: { value: _.transparent0, hover: _.transparent0, disabled: _.transparent0 },
    link: { value: _.transparent0, hover: _.transparent0, disabled: _.transparent0 },
    error: { value: _.transparent0, hover: _.transparent0, disabled: _.transparent0 },
  },
  color: {
    primary: { value: _.gray2, hover: _.gray2, disabled: _.gray2 },
    secondary: { value: _.white0, hover: _.white0, disabled: _.white0 },
    danger: { value: _.white0, hover: _.white0, disabled: _.white0 },
    success: { value: _.white0, hover: _.white0, disabled: _.white0 },
    warning: { value: _.white0, hover: _.white0, disabled: _.white0 },
    info: { value: _.white0, hover: _.white0, disabled: _.white0 },
    infoOnWhite: { value: _.white0, hover: _.white0, disabled: _.white0 },
    link: { value: _.white0, hover: _.white0, disabled: _.white0 },
    error: { value: _.white0, hover: _.white0, disabled: _.white0 },
  },
  borderStyle: 'solid',
}

// Widgets
export const WidgetSchemeDark: TColorScheme = {
  backgroundColor: {
    primary: { value: _.darkblue2, hover: _.transparent1, disabled: _.darkblue2 },
    secondary: { value: _.darkblue3, hover: _.transparent1, disabled: _.darkblue3 },
    danger: { value: _.darkblue2, hover: _.transparent2, disabled: _.darkblue2 },
    success: { value: _.darkblue5, hover: _.transparent0, disabled: _.darkblue5 },
    warning: { value: _.darkblue5, hover: _.transparent0, disabled: _.darkblue5 },
    info: { value: _.darkblue5, hover: _.transparent0, disabled: _.darkblue5 },
    infoOnWhite: { value: _.darkblue5, hover: _.transparent0, disabled: _.darkblue5 },
    link: { value: _.darkblue5, hover: _.transparent0, disabled: _.darkblue5 },
    error: { value: _.darkblue5, hover: _.transparent0, disabled: _.darkblue5 },
  },
  borderColor: {
    primary: { value: _.blue1, hover: _.blue1, disabled: _.blue1 },
    secondary: { value: _.darkblue2, hover: _.darkblue2, disabled: _.darkblue2 },
    danger: { value: _.blue5, hover: _.blue5, disabled: _.blue5 },
    success: { value: _.darkblue6, hover: _.darkblue6, disabled: _.darkblue6 },
    warning: { value: _.darkblue6, hover: _.darkblue6, disabled: _.darkblue6 },
    info: { value: _.darkblue6, hover: _.darkblue6, disabled: _.darkblue6 },
    infoOnWhite: { value: _.darkblue6, hover: _.darkblue6, disabled: _.darkblue6 },
    link: { value: _.darkblue6, hover: _.darkblue6, disabled: _.darkblue6 },
    error: { value: _.darkblue6, hover: _.darkblue6, disabled: _.darkblue6 },
  },
  color: {
    primary: { value: _.gray8, hover: _.gray8, disabled: _.gray8 },
    secondary: { value: _.white0, hover: _.white0, disabled: _.white0 },
    danger: { value: _.white0, hover: _.white0, disabled: _.white0 },
    success: { value: _.white0, hover: _.white0, disabled: _.white0 },
    warning: { value: _.white0, hover: _.white0, disabled: _.white0 },
    info: { value: _.white0, hover: _.white0, disabled: _.white0 },
    infoOnWhite: { value: _.white0, hover: _.white0, disabled: _.white0 },
    link: { value: _.white0, hover: _.white0, disabled: _.white0 },
    error: { value: _.white0, hover: _.white0, disabled: _.white0 },
  },
  borderStyle: 'solid',
}

export const WidgetSchemeLight: TColorScheme = {
  backgroundColor: {
    primary: { value: _.gray6, hover: _.transparent1, disabled: _.gray6 },
    secondary: { value: _.transparent0, hover: _.transparent1, disabled: _.transparent1 },
    danger: { value: _.darkblue2, hover: _.transparent2, disabled: _.darkblue2 },
    success: { value: _.darkblue5, hover: _.transparent0, disabled: _.darkblue5 },
    warning: { value: _.darkblue5, hover: _.transparent0, disabled: _.darkblue5 },
    info: { value: _.darkblue5, hover: _.transparent0, disabled: _.darkblue5 },
    infoOnWhite: { value: _.darkblue5, hover: _.transparent0, disabled: _.darkblue5 },
    link: { value: _.darkblue5, hover: _.transparent0, disabled: _.darkblue5 },
    error: { value: _.darkblue5, hover: _.transparent0, disabled: _.darkblue5 },
  },
  borderColor: {
    primary: { value: _.blue1, hover: _.blue1, disabled: _.blue1 },
    secondary: { value: _.darkblue6, hover: _.darkblue6, disabled: _.darkblue6 },
    danger: { value: _.blue5, hover: _.blue5, disabled: _.blue5 },
    success: { value: _.darkblue6, hover: _.darkblue6, disabled: _.darkblue6 },
    warning: { value: _.darkblue6, hover: _.darkblue6, disabled: _.darkblue6 },
    info: { value: _.darkblue6, hover: _.darkblue6, disabled: _.darkblue6 },
    infoOnWhite: { value: _.darkblue6, hover: _.darkblue6, disabled: _.darkblue6 },
    link: { value: _.darkblue6, hover: _.darkblue6, disabled: _.darkblue6 },
    error: { value: _.darkblue6, hover: _.darkblue6, disabled: _.darkblue6 },
  },
  color: {
    primary: { value: _.gray2, hover: _.gray2, disabled: _.gray2 },
    secondary: { value: _.gray4, hover: _.gray4, disabled: _.gray4 },
    danger: { value: _.white0, hover: _.white0, disabled: _.white0 },
    success: { value: _.white0, hover: _.white0, disabled: _.white0 },
    warning: { value: _.white0, hover: _.white0, disabled: _.white0 },
    info: { value: _.white0, hover: _.white0, disabled: _.white0 },
    infoOnWhite: { value: _.white0, hover: _.white0, disabled: _.white0 },
    link: { value: _.white0, hover: _.white0, disabled: _.white0 },
    error: { value: _.white0, hover: _.white0, disabled: _.white0 },
  },
  borderStyle: 'solid',
}

export type TThemes = {
  [theme in ETheme]: TColorScheme
}

export const themes: TThemes = {
  [ETheme.DARK]: colorSchemeDark,
  [ETheme.LIGHT]: colorSchemeLight,
}

export const sectionThemes: TThemes = {
  [ETheme.DARK]: SectionSchemeDark,
  [ETheme.LIGHT]: SectionSchemeLight,
}

export const widgetThemes: TThemes = {
  [ETheme.DARK]: WidgetSchemeDark,
  [ETheme.LIGHT]: WidgetSchemeLight,
}
