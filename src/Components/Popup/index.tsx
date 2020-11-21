import React, { FC, ReactNode } from 'react'
import { Modal } from 'react-bootstrap'

import Button from '../OpiumButton'

import { generateRenderProps } from '../../Utils/helpers'
import { Theme } from '../../Constants/Types/theme.types'

import './Popup.scss'

export type Props = {
  theme: Theme
  size?: 'sm' | 'lg' | 'xl'
  title?: string
  component?: ReactNode
  hideCross?: boolean
  closePopup: Function
  popupIsOpen: boolean
  handleAction?: Function
  showActionButton?: boolean
  showCancelButton?: boolean
  actionButtonTitle?: string
  cancelButtonTitle: string
}

const defaultProps: Props = {
  theme: Theme.DARK,
  size: 'sm',
  title: '',
  component: '',
  hideCross: false,
  closePopup: () => { },
  popupIsOpen: false,
  handleAction: () => { },
  showActionButton: true,
  showCancelButton: true,
  actionButtonTitle: '',
  cancelButtonTitle: '',
}

const Popup: FC<Props> = (props: Props) => {
  const renderProps = generateRenderProps(defaultProps, props)

  const {
    theme,
    size,
    title,
    component,
    hideCross,
    closePopup,
    popupIsOpen,
    handleAction,
    showActionButton,
    showCancelButton,
    actionButtonTitle,
    cancelButtonTitle,
  } = renderProps

  return (
    <Modal
      size={size}
      show={popupIsOpen}
      onHide={closePopup}
      className="attention-popup"
      contentClassName={`color-scheme-${theme}`}
    >
      {!hideCross && <button className="close-button" onClick={closePopup} />}
      <Modal.Body>
        {title && <Modal.Title>{title}</ Modal.Title>}
        {component && <div className="modal-description">{component}</div>}
      </Modal.Body>
      <Modal.Footer>
        <div className="buttons-wrap">
          {
            showActionButton &&
            <Button
              theme={theme}
              variant="primary"
              onClick={handleAction}
              label={actionButtonTitle}
            />
          }
          {
            showCancelButton &&
            <Button
              theme={theme}
              variant="secondary"
              onClick={closePopup}
              label={cancelButtonTitle}
            />
          }
        </div>
      </Modal.Footer>
    </Modal>
  )
}

export default Popup
