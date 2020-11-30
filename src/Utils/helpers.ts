import { ETheme, TColorScheme, colorSchemeDark, colorSchemeLight } from '../Constants/Types/theme.types'

export const generateRenderProps = (defaults: any, props: any): any => {
  return { ...defaults, ...props }
}

export const generateThemeColors = (theme: ETheme): TColorScheme => {
  return (theme === ETheme.DARK) ? colorSchemeDark : colorSchemeLight
}
