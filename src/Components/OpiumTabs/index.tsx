import React, { FC, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Tab, Tabs } from 'react-bootstrap'

import { Theme } from '../../Constants/Types/theme.types'

import { generateRenderProps } from '../../Utils/helpers'

import './OpiumTabs.scss'

export type Props = {
  theme: Theme
  items?: {
    title: string,
    eventKey: string,
    content: JSX.Element,
  }[]
  /** Default tab key value */
  defaultActiveKey?: string,
  /** id */
  id?: string,
}

const defaultProps: Props = {
  theme: Theme.DARK,
  items: [],
}

const OpiumTabs: FC<Props> = (props: Props) => {
  const [activeTabKey, setActiveTabKey] = useState<string | null>('tab1')

  const renderProps = generateRenderProps(defaultProps, props)

  const { items, theme, defaultActiveKey, id } = renderProps

  const tabItems = items.map((item: any) => {
    const { title, eventKey, content } = item
    return (
      <Tab
        key={uuidv4()}
        title={title}
        eventKey={eventKey}
        className={`color-scheme-${theme}`}
      >
        {content}
      </Tab>
    )
  })

  return (
    <Tabs
      id={id}
      activeKey={activeTabKey}
      defaultActiveKey={defaultActiveKey}
      className={`color-scheme-${theme}`}
      onSelect={(key: string | null) => setActiveTabKey(key)}
    >
      {tabItems}
    </Tabs>
  )
}

export default OpiumTabs
