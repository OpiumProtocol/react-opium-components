import React, { FC } from 'react'
import { ETheme } from '../../Constants/Types/theme.types'

import './ControlledTabs.scss'

export enum EControlledTabsSizes {
  S = 'S',
  M = 'M',
  L = 'L',
}

export type Props = {
  theme?: ETheme,
  tabs: {
    id: string,
    title: string,
  }[],
  activeTabId: string,
  disabledTabIds?: string[],
  size?: EControlledTabsSizes,
  className?: string,
  switchTab: (newTabId: string) => any,
}

const ControlledTabs: FC<Props> = ({
  theme = ETheme.DARK,
  tabs,
  activeTabId,
  disabledTabIds = [],
  size = EControlledTabsSizes.M,
  className = '',
  switchTab,
}: Props) => {
  const tabsClasses = [
    'controlled-tabs',
    `controlled-tabs_${theme}`,
    `controlled-tabs_size-${size}`,
    ...(className ? [className] : []),
  ].join(' ')

  return (
    <div className={tabsClasses}>
      {tabs.map(tab => {
        const isActive = tab.id === activeTabId
        const isDisabled = disabledTabIds.includes(tab.id)

        const tabClasses = [
          'controlled-tab',
          ...(isActive ? ['controlled-tab_is-active'] : []),
          ...(isDisabled ? ['controlled-tab_is-disabled'] : []),
        ].join(' ')

        const onClick = () => {
          if (!isDisabled) switchTab(tab.id)
        }

        return (
          <div
            key={tab.id}
            className={tabClasses}
            onClick={onClick}
            data-title={tab.title}
          >
            {tab.title}
          </div>
        )
      })}
    </div>
  )
}

export default ControlledTabs
