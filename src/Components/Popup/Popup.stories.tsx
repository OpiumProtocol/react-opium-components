import React, { useState } from 'react'
import Popup from './index'
import Button from '../Button'

import { withKnobs, text } from '@storybook/addon-knobs'

export const popup = () => {
  const [popupIsOpen, setPopupIsOpen] = useState(false)
  const [checkBoxChecked, setCheckBoxChecked] = useState(false)
  const [loading, setLoading] = useState(true)

  text('Text', 'Alert!')

  const handleClick = () => {
    setPopupIsOpen(!popupIsOpen)
    setTimeout(() => (setLoading(false)), 2000)
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
        title=''
        size='lg'
        description={renderJSX()}
        attention={false}
        loading={loading}
        closePopup={() => setPopupIsOpen(false)}
        popupIsOpen={popupIsOpen}
        showActionButton={false}
        handleAction={() => { }}
        actionButtonTitle='Action'
        cancelButtonTitle='Cancel'
        showCheckBox={false}
        handleCheckBoxChange={() => setCheckBoxChecked(!checkBoxChecked)}
        checkBoxChecked={checkBoxChecked}
        checkBoxLabel='Checkbox'
        hideCross={false}
      />
    </>
  )
}

export default { title: 'Popup component', decorators: [withKnobs] }
