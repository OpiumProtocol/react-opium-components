import { Theme, Colors, colorSchemeDark, colorSchemeLight } from '../Constants/Types/theme.types'

export const generateRenderProps = (defaults: any, props: any): any => {
  return { ...defaults, ...props }
}

export const generateThemeColors = (theme: Theme) => {
  return (theme === Theme.DARK) ? colorSchemeDark : colorSchemeLight
}
