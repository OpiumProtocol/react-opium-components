import React, { FC, ReactNode } from 'react'
import { Modal } from 'react-bootstrap'

import Button from '../Button'

import { generateRenderProps } from '../../Utils/helpers'

import './Popup.scss'

type Props = {
  size?: 'sm' | 'lg' | 'xl'
  title?: string
  hideCross?: boolean
  closePopup: Function
  description?: ReactNode
  popupIsOpen: boolean
  handleAction?: Function
  showActionButton?: boolean
  showCancelButton?: boolean
  actionButtonTitle?: string
  cancelButtonTitle: string
}

const defaultProps: Props = {
  size: 'sm',
  title: '',
  hideCross: false,
  closePopup: () => { },
  description: '',
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
    size,
    title,
    hideCross,
    closePopup,
    description,
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
    >
      {!hideCross && <button className="close-button" onClick={closePopup} />}
      <Modal.Body>
        {title && <Modal.Title>{title}</ Modal.Title>}
        {description && <div className="modal-description">{description}</div>}
      </Modal.Body>
      <Modal.Footer>
        <div className="buttons-wrap">
          {
            showActionButton &&
            <Button
              variant="primary"
              onClick={handleAction}
              text={actionButtonTitle}
            />
          }
          {
            showCancelButton &&
            <Button
              variant="secondary"
              onClick={closePopup}
              text={cancelButtonTitle}
            />
          }
        </div>
      </Modal.Footer>
    </Modal>
  )
}

export default Popup
