import Alert from './Components/Alert'
// import PopUp from './Components/PopUp'
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
import Chart from './Components/Chart'
import DropdownSelector from './Components/DropdownSelector'
import DropDown from './Components/DropDown'
import SelectCustomized from './Components/SelectCustomized'
import ContainerWithCollapse from './Components/ContainerWithCollapse'
import RadioButton from './Components/RadioButton'
import Checkbox from './Components/Checkbox'
import GTMWrapper from './Components/GTMWrapper'
import BlockWithList from './Components/BlockWithList'
import AuthorizationPopUp from './Components/AuthorizationPopUp'
import Switcher from './Components/Switcher'
import ProgressBar from './Components/ProgressBar'

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
  // PopUp,
  Table,
  Button,
  Loading,
  Tooltip,
  Segments,
  InfoBlock,
  TextBlock,
  NumberBlock,
  LocalizedInput,
  AuthorizationPopUp,
  DropDown,
  DropdownSelector,
  SelectCustomized,
  ContainerWithCollapse,
  RadioButton,
  GTMWrapper,
  BlockWithList,
  Switcher,
  Chart,
  Checkbox,
  ProgressBar,
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
