import Alert from './Components/Alert'
import Popup from './Components/Popup'
import Table, { TTableDimension, TTableHeight } from './Components/Table'
import Tabs from './Components/OpiumTabs'
import Loading from './Components/Loading'
import Segments from './Components/Segments'
import Button from './Components/OpiumButton'
import TextBlock from './Components/TextBlock'
import Tooltip from './Components/OpiumTooltip'
import NumberBlock from './Components/NumberBlock'
import LocalizedInput from './Components/LocalizedInput'
import InfoBlock from './Components/InfoBlock'
import DropdownSelector from './Components/DropdownSelector'
import ContainerWithCollapse from './Components/ContainerWithCollapse'
import Checkbox from './Components/Checkbox'
import GTMWrapper from './Components/GTMWrapper'

import {
  themes,
  widgetThemes,
  sectionThemes,
  ETheme,
  TThemes,
  TColorScheme,
  TVariant,
} from './Constants/Types/theme.types'

import colors from './Styles/exportColors.scss'

export {
  Tabs,
  Alert,
  Popup,
  Table,
  Button,
  Loading,
  Tooltip,
  Segments,
  InfoBlock,
  TextBlock,
  NumberBlock,
  LocalizedInput,
  DropdownSelector,
  ContainerWithCollapse,
  GTMWrapper,
  Checkbox,
  themes,
  widgetThemes,
  sectionThemes,
  ETheme,
  colors,
}

export type {
  TThemes,
  TVariant,
  TColorScheme,
  TTableHeight,
  TTableDimension,
}
