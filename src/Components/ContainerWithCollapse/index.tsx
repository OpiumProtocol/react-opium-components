import React from 'react'

import {
  Accordion,
  Card,
} from 'react-bootstrap'

import _ from '../../Styles/exportColors.scss'

import { generateRenderProps } from '../../Utils/helpers'
import { ETheme } from '../../Constants/Types/theme.types'

import './ContainerWithCollapse.scss'

export type Props = {
  className?: string
  accentColor?: string
  /** Define theme */
  theme?: ETheme
  header: any
  body: any,
  eventKey: string,
  disabled?: boolean
  disabledMessage?: string
  hoverControlled?: boolean
}

const defaultProps: Props = {
  theme: ETheme.DARK,
  eventKey: '0',
  header: <div></div>,
  body: <div></div>
}

const ContainerWithCollapse: React.FC<Props> = (props: Props) => {
  const renderProps = generateRenderProps(defaultProps, props)

  const {
    className,
    theme,
    accentColor: accentColorProp,
    header,
    body,
    eventKey,
    disabled,
    hoverControlled,
    disabledMessage
  } = renderProps

  let accentColor = (theme === ETheme.LIGHT && accentColorProp === _.white0) ? _.darkblue1 : accentColorProp

  console.log('accentColorProp, _.white0', accentColorProp, _.white0)

  const [hovered, setHovered] = React.useState(false)

  return (
    <div className={`ContainerWithCollapse ${className ? className : ''} color-scheme-${theme} ${disabled ? 'ContainerWithCollapse_disabled' : ''}`}>
      <Accordion
        style={{ borderColor: ((hovered && !disabled) || hoverControlled) ? accentColor : 'transparent' }}
        onMouseEnter={() => !hoverControlled && setHovered(true)}
        onMouseLeave={() => !hoverControlled && setHovered(false)}
      >
        <Card>
          <Card.Header>
            {header}
          </Card.Header>
          <Accordion.Collapse eventKey={eventKey}>
            <Card.Body>
              {body}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      {disabled && <div className="ContainerWithCollapse__disabled">
        <span>{disabledMessage}</span>
      </div>}
    </div>
  )
}

export default ContainerWithCollapse
