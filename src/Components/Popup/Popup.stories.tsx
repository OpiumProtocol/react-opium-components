import React, { useState } from 'react'
import Popup from './index'
import Button from '../Button'

import { withKnobs, text } from '@storybook/addon-knobs'

export const popup = () => {
  const [popupIsOpen, setPopupIsOpen] = useState(false)

  text('Text', 'Popup!')

  const handleClick = () => {
    setPopupIsOpen(!popupIsOpen)
  }

  const renderJSX = () => {
    return (
      <div>
        <h1>Heading 1</h1>
        <p style={{ color: 'red' }}>Red Coloured Text</p>
        <p>Some text...</p>
      </div >
    )
  }

  return (
    <>
      <Button text="Show / hide popup" onClick={handleClick} />
      <Popup
        size='lg'
        title='Title'
        hideCross={false}
        closePopup={() => setPopupIsOpen(false)}
        description={renderJSX()}
        popupIsOpen={popupIsOpen}
        handleAction={() => { }}
        showActionButton={false}
        showCancelButton={true}
        actionButtonTitle='Action'
        cancelButtonTitle='Cancel'
      />
    </>
  )
}

export default { title: 'Popup component', decorators: [withKnobs] }
