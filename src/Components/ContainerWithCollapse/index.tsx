import React from 'react'

import {
  Accordion,
  Card
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
  body: any
}

const defaultProps: Props = {
  theme: ETheme.DARK,
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
    body
  } = renderProps

  return (
    <div className={`ContainerWithCollapse ${className} color-scheme-${theme}`}>
      <Accordion defaultActiveKey="1" style={{ borderColor: accentColor }}>
        <Card>
          <Card.Header>
            {header}
          </Card.Header>
          <Accordion.Collapse eventKey="0">
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
