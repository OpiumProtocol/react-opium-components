import React from 'react'

import {
  Accordion,
  Card,
} from 'react-bootstrap'

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
    accentColor,
    header,
    body,
    eventKey
  } = renderProps

  const [hovered, setHovered] = React.useState(false)

  return (
    <div className={`ContainerWithCollapse ${className ? className : ''} color-scheme-${theme}`}>
      <Accordion
        style={{ borderColor: hovered ? accentColor : 'transparent' }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
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
    </div>
  )
}

export default ContainerWithCollapse
