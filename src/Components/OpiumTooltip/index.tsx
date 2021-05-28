import React, { FC, CSSProperties, useState } from 'react'
import { OverlayTrigger, Popover } from 'react-bootstrap'
import { OverlayTriggerType } from 'react-bootstrap/esm/OverlayTrigger'

import Button from '../OpiumButton'

import { generateRenderProps } from '../../Utils/helpers'
import { ETheme, themes, TTooltipPlacement } from '../../Constants/Types/theme.types'

import './Tooltip.scss'

export type Props = {
  /** Define theme */
  theme?: ETheme
  /** Trigger component */
  component?: JSX.Element
  /** Tooltip content */
  content?: string | JSX.Element
  /** Trigger label */
  label: string
  /** Side placement */
  placement?: TTooltipPlacement
  /** Disabled flag for buttons* (*important) */
  disabledBtn?: boolean
  /** Set trigger variant */
  trigger?: 'hover' | 'click' | 'focus' | OverlayTriggerType[]
  /** Set class selectors */
  className?: string
  /** Set styles */
  style?: CSSProperties
  /** Close if click outside */
  rootClose?: boolean
  /** Flag to show */
  show?: boolean
  /** Flag if content is html */
  html?: boolean
}

export const defaultProps: Props = {
  theme: ETheme.DARK,
  className: '',
  placement: 'right',
  label: '!',
  style: {},
  content: <span><strong>Holy guacamole!</strong> Check this info.</span>,
}

const OpiumTooltip: FC<Props> = (props: Props) => {
  const [hover, setHover] = useState<boolean>(false)

  const {
    label,
    theme,
    style,
    trigger,
    content,
    component,
    className,
    placement,
    rootClose,
    show,
    disabledBtn,
    html
  } = generateRenderProps(defaultProps, props)

  const componentStyles = {
    width: 'fit-content',
    marginRight: '1rem',
    fontSize: '0.6rem',
    fontWeight: 900,
    borderRadius: '30px',
    padding: '0.15rem 0.5rem',
    ...style,
  }

  if (hover) {
    const { color, backgroundColor, borderColor } = themes[theme as ETheme]

    componentStyles.backgroundColor = backgroundColor.primary.value
    componentStyles.borderColor = borderColor.primary.value
    componentStyles.color = color.primary.value
  }

  return (
    <OverlayTrigger
      key={placement}
      trigger={trigger}
      show={show}
      placement={placement}
      rootClose={rootClose}
      overlay={
        <Popover
          id={`popover-positioned-${placement}`}
          className={`${className} color-scheme-${theme}`}
        >
          <Popover.Content className={`color-scheme-${theme}`} >
            {
              html ?
                <div dangerouslySetInnerHTML={{
                  __html: content
                }} />
                : content
            }
          </Popover.Content>
        </Popover>
      }
    >
      {
        disabledBtn ? (
          <div className="popover__disabled-button">{component}</div>
        ) :
          component
            ? component
            : <Button
              variant={'primary'}
              label={label}
              onClick={() => { }}
              style={componentStyles}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            />
      }
    </OverlayTrigger>
  )
}

export default OpiumTooltip
