import React, { useState } from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'

import Pagination from './index'
import Button from '../OpiumButton'

import { ETheme, sectionThemes } from '../../Constants/Types/theme.types'

export const PaginationStory = () => {
  const message = text('Text', 'Pagination')

  const [theme, setTheme] = useState<ETheme>(ETheme.DARK)

  const backgroundColor = sectionThemes[theme as ETheme].backgroundColor.primary.value
  const color = sectionThemes[theme as ETheme].color.primary.value

  return (
    <div style={{ padding: '3rem', backgroundColor }}>
      <h1 style={{ color, textAlign: 'center', marginBottom: '3rem' }}>{message}</h1>
      <div style={{ display: 'flex', marginBottom: '5rem' }}>
        <Button
          theme={theme}
          label="Light theme"
          variant={'secondary'}
          style={{ marginRight: '1rem' }}
          onClick={() => setTheme(ETheme.LIGHT)}
        />
        <Button
          theme={theme}
          label="Dark theme"
          variant={'primary'}
          onClick={() => setTheme(ETheme.DARK)}
        />
      </div>

      <Pagination 
        theme={theme}
        currentPage={1}
        siblingCount={1}
        pageSize={3}
        totalCount={50}
        onPageChange={(p: number) => console.log(p)}
      />
    </div>
  )
}
export default {
  title: 'Pagination component',
  decorators: [withKnobs],
  component: PaginationStory,
  parameters: {},
}
