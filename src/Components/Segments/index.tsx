import React from 'react'

import Segment from './Segment'

import { generateRenderProps } from '../../Utils/helpers'
import { ETheme, TVariant } from '../../Constants/Types/theme.types'

import './Segments.scss'

export type Props = {
  /** Define theme */
  theme?: ETheme
  /** Set items */
  items?: { label: string, value: string }[]
  /** Set active item value */
  currentValue?: string
  /** Function, that fires active item */
  onClick?: (val: string) => void
  /** Set class selectors */
  className?: string
  /** Set component uncontrolled */
  uncontrolled?: boolean
  /** Disabled flag */
  disabled?: boolean
  /** Set button variant */
  variant?: TVariant
  /** Set disabled button */
  disableButton?: number
}

const defaultProps: Props = {
  theme: ETheme.DARK,
  currentValue: '',
  items: [
    { label: 'First', value: '1' },
    { label: 'Second', value: '2' },
  ],
  onClick: () => { },
  className: ''
}

const Segments: React.FC<Props> = (props: Props) => {
  const renderProps = generateRenderProps(defaultProps, props)
  const { currentValue, items, theme, variant, onClick, className, uncontrolled, disabled, disableButton } = renderProps

  return (
    <div className={`segments ${className}`}>
      {
        items.length && items.map(({ label, value }: any, idx: number) => (
          <Segment
            key={'segment-' + label}
            label={label}
            value={value}
            theme={theme}
            variant={variant}
            onClick={onClick}
            currentValue={currentValue}
            uncontrolled={uncontrolled}
            disabled={disableButton === idx + 1 || disabled}
          />
        ))
      }
    </div>
  )
}

export default Segments
