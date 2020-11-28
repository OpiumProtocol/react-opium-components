import _ from '../../Styles/exportColors.scss'

export enum ETheme {
  LIGHT = 'LIGHT',
  DARK = 'DARK',
}

export type TColorScheme = {
  color: TColorSet
  backgroundColor: TColorSet
  borderColor: TColorSet
  borderStyle: string
}

type TColorSet = {
  primary: { value: string, hover: string },
  secondary: { value: string, hover: string },
  danger: { value: string, hover: string },
  success: { value: string, hover: string },
  warning: { value: string, hover: string },
}

export const colorSchemeLight: TColorScheme = {
  color: {
    primary: { value: _.blue1, hover: _.white0 },
    secondary: { value: _.gray4, hover: _.white0 },
    danger: { value: _.red0, hover: _.red2 },
    success: { value: _.gray4, hover: _.green1_darken },
    warning: { value: _.gray4, hover: _.yellow3_darken },
  },
  backgroundColor: {
    primary: { value: _.white0, hover: _.blue1 },
    secondary: { value: _.gray6_30, hover: _.gray5 },
    danger: { value: _.red0_20, hover: _.red0_40 },
    success: { value: _.green1_30, hover: _.green1_50 },
    warning: { value: _.yellow3_60, hover: _.yellow3 },
  },
  borderColor: {
    primary: { value: _.blue1, hover: _.blue1 },
    secondary: { value: _.gray6, hover: _.gray5 },
    danger: { value: _.transparent0, hover: _.transparent0 },
    success: { value: _.transparent0, hover: _.transparent0 },
    warning: { value: _.transparent0, hover: _.transparent0 },
  },
  borderStyle: 'solid',
}

export const colorSchemeDark: TColorScheme = {
  color: {
    primary: { value: _.darkgray4, hover: _.white0 },
    secondary: { value: _.darkgray4, hover: _.darkgray6 },
    danger: { value: _.red0_50, hover: _.red0 },
    success: { value: _.green1, hover: _.white0 },
    warning: { value: _.yellow3, hover: _.white0 },
  },
  backgroundColor: {
    primary: { value: _.darkgray1, hover: _.darkgray1_darken },
    secondary: { value: _.darkgray2, hover: _.darkgray3 },
    danger: { value: _.red0_20, hover: _.red0_40 },
    success: { value: _.green1_30, hover: _.green1_40 },
    warning: { value: _.yellow3_60, hover: _.yellow3_70 },
  },
  borderColor: {
    primary: { value: _.darkgray2, hover: _.darkgray3 },
    secondary: { value: _.transparent0, hover: _.transparent0 },
    danger: { value: _.transparent0, hover: _.transparent0 },
    success: { value: _.transparent0, hover: _.transparent0 },
    warning: { value: _.transparent0, hover: _.transparent0 },
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
