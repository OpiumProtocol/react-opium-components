import React, { useState } from 'react'
import Alert from './index'
import Button from '../Button'

import { withKnobs, text } from '@storybook/addon-knobs'

export const alert = () => {
  const [popupIsOpen, setPopupIsOpen] = useState(false)
  text('Text', 'Alert!')

  return (
    <>
      <Button text="Show / hide alert" onClick={() => setPopupIsOpen(!popupIsOpen)} />
      <Alert
        title='Alert title'
        description='Lorem lorem'
        attention={true}
        loading={false}
        closePopup={() => setPopupIsOpen(false)}
        popupIsOpen={popupIsOpen}
        showActionButton={true}
        handleAction={() => { }}
        actionButtonTitle='Action'
        cancelButtonTitle='Cancel'
        showCheckBox={true}
        handleCheckBoxChange={() => { }}
        checkBoxChecked={true}
        checkBoxLabel='Checkbox'
        hideCross={false}
      />
    </>
  )
}

export default { title: 'Alert component', decorators: [withKnobs] }
