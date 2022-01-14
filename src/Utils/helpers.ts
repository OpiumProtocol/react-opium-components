import { ETheme, TColorScheme, colorSchemeDark, colorSchemeLight } from '../Constants/Types/theme.types'

export const generateRenderProps = (defaults: any, props: any): any => {
  return { ...defaults, ...props }
}

export const generateThemeColors = (theme: ETheme): TColorScheme => {
  return (theme === ETheme.DARK) ? colorSchemeDark : colorSchemeLight
}

export const checkIsMobile = () => {
  const userAgent = typeof window.navigator === 'undefined'
    ? ''
    : navigator.userAgent
  const rgx = /Android|BlackBerry|iPhone|iPod|Opera Mini|IEMobile|WPDesktop/i
  const deviceIsMobile = Boolean(userAgent.match(rgx))
  return deviceIsMobile
}
