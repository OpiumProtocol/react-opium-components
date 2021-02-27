import React, { FC, useState, BaseSyntheticEvent } from 'react'

import {
  ETheme,
} from '../../Constants/Types/theme.types'

import { generateRenderProps } from '../../Utils/helpers'

import './NewNumberInput.scss'

export type Props = {
  /** Define theme */
  theme?: ETheme
  /** Value passed to the onSelect handler, useful for identifying the selected menu item */
  eventKey?: any
  /** Function, that became active by clicking on an option */
  onClick?: Function
  /** Function, that became active after an option has become selected */
  onSelect?: (eventKey: any, event: BaseSyntheticEvent) => any
  /** Set class selectors */
  className?: string
  /** Set component uncontrolled */
  uncontrolled?: boolean

  label?: string
  value?: string | number
}

const defaultProps: Props = {
  theme: ETheme.DARK,
  className: '',
  onClick: () => { },
  onSelect: (eventKey: any, event: BaseSyntheticEvent) => { },
}

const NewNumberInput: FC<Props> = (props: Props) => {
  const renderProps = generateRenderProps(defaultProps, props)
  const {
    label,
    value,
    theme,
    onClick,
    onSelect,
    className,
    uncontrolled,
  } = renderProps

  const [localValue, setLocalValue] = useState<string>('0.0')

  React.useEffect(() => {
    value && setLocalValue(value)
  }, [])

  return (
    <div className="NewNumberInput">
      <input type="number" value={localValue} onChange={(e) => setLocalValue(e.target.value)} />
      <div className="NewNumberInput__label">{label}</div>
      <div className="NewNumberInput__max">MAX</div>
    </div>
  )
}

export default NewNumberInput
