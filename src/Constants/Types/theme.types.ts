import _ from '../../Styles/exportColors.scss'

export enum ETheme {
  LIGHT = 'LIGHT',
  DARK = 'DARK',
}

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
  color: TColorSet
  backgroundColor: TColorSet
  borderColor: TColorSet
  borderStyle: string
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

export type TThemes = {
  [theme in ETheme]: TColorScheme
}

export const themes: TThemes = {
  [ETheme.DARK]: colorSchemeDark,
  [ETheme.LIGHT]: colorSchemeLight,
}

export const getVariant = (variant?: any) => {
  if (variant === 'secondary') return 'secondary'
  if (variant === 'danger') return 'danger'
  if (variant === 'success') return 'success'
  if (variant === 'warning') return 'warning'
  if (variant === 'info') return 'info'
  if (variant === 'link') return 'link'
  if (variant === 'error') return 'error'
  return 'primary'
}


// export const getVariant = (variant?: string): string => {
//   return variant || 'primary'
// }
