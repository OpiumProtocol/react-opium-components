import numeral from 'numeral'
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

export const calculateIncreaseDomain = (acc: number[], increaseDomainY: number): number[] => {
  const minY = (acc[0] === 0 ? acc[0] - (acc[1] * increaseDomainY) : acc[0] < 0 ? (acc[0] * (1 + increaseDomainY)) : acc[0] - (acc[0] * increaseDomainY))
  const maxY = (acc[1] === 0 ? acc[1] + (acc[0] * increaseDomainY) : acc[1] * (1 + increaseDomainY))
  return [+numeral(minY).format('0[.]'), +numeral(maxY).format('0[.]')]
}
