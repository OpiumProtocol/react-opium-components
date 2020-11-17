import React, { useState } from 'react'
import Alert from './index'
import Button from '../Button'

import { withKnobs, text } from '@storybook/addon-knobs'

export const alert = () => {
  const [ popupIsOpen, setPopupIsOpen ] = useState(false)
  const [ checkBoxChecked, setCheckBoxChecked ] = useState(false)
  text('Text', 'Alert!')

  return (
    <>
      <Button text="Show / hide alert" onClick={() => setPopupIsOpen(!popupIsOpen)} />
      <Alert
        title='Alert title'
        size='lg'
        description='Description. Lorem lorem'
        attention={true}
        loading={false}
        closePopup={() => setPopupIsOpen(false)}
        popupIsOpen={popupIsOpen}
        showActionButton={true}
        handleAction={() => { }}
        actionButtonTitle='Action'
        cancelButtonTitle='Cancel'
        showCheckBox={true}
        handleCheckBoxChange={() => setCheckBoxChecked(!checkBoxChecked)}
        checkBoxChecked={checkBoxChecked}
        checkBoxLabel='Checkbox'
        hideCross={false}
      />
    </>
  )
}

export default { title: 'Alert component', decorators: [ withKnobs ] }
