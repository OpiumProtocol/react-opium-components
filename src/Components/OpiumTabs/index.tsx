import React, { FC, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Tab, Tabs } from 'react-bootstrap'

import { Theme } from '../../Constants/Types/theme.types'

import { generateRenderProps } from '../../Utils/helpers'

import './OpiumTabs.scss'

export type Props = {
  /** Define theme */
  theme?: Theme
  /** Set tab items */
  items?: {
    title: string,
    eventKey: string,
    content: JSX.Element,
  }[]
  /** Default tab key value */
  defaultActiveKey?: string,
  /** id */
  id?: string,
  /** Set class selectors */
  className?: string
}

const defaultProps: Props = {
  theme: Theme.DARK,
  items: [
    {
      title: 'Tab1',
      eventKey: 'tab1',
      content: <p key={uuidv4()}>Tab1 content</p>
    },
    {
      title: 'Tab2',
      eventKey: 'tab2',
      content: <p key={uuidv4()}>Tab2 content</p>
    },
  ],
  className: ''
}

const OpiumTabs: FC<Props> = (props: Props) => {
  const renderProps = generateRenderProps(defaultProps, props)
  const { items, theme, defaultActiveKey, id, className } = renderProps

  const [activeTabKey, setActiveTabKey] = useState<string | null>(defaultActiveKey || items[0].eventKey)

  return (
    <Tabs
      id={id}
      activeKey={activeTabKey}
      className={`color-scheme-${theme}`}
      onSelect={(key: string | null) => setActiveTabKey(key)}
    >
      {
        items.length && items.map((item: any) => {
          const { title, eventKey, content } = item
          return (
            <Tab
              key={uuidv4()}
              title={title}
              eventKey={eventKey}
              className={`color-scheme-${theme} ${className}`}
            >
              {content}
            </Tab>
          )
        })
      }
    </Tabs>
  )
}

export default OpiumTabs
