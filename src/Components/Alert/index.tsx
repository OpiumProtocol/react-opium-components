import React, { FC, useState, BaseSyntheticEvent, ReactNode } from 'react'
import { Form, Modal } from 'react-bootstrap'
import { v4 as uuidv4 } from 'uuid'

import Button from '../Button'
import Loading from '../Loading'

import { generateRenderProps } from '../../Utils/helpers'

import './Alert.module.scss'

type Props = {
  title?: string,
  description?: string | ReactNode
  attention?: boolean
  loading?: boolean
  closePopup: Function
  popupIsOpen: boolean
  showActionButton?: boolean
  handleAction?: Function
  actionButtonTitle?: string
  cancelButtonTitle: string
  showCheckBox?: boolean
  handleCheckBoxChange?: Function
  checkBoxChecked?: boolean
  checkBoxLabel?: string
  hideCross?: boolean
}

const defaultProps: Props = {
  title: '',
  description: '',
  attention: false,
  loading: false,
  closePopup: () => { },
  popupIsOpen: false,
  showActionButton: true,
  handleAction: () => { },
  actionButtonTitle: '',
  cancelButtonTitle: '',
  showCheckBox: true,
  handleCheckBoxChange: () => { },
  checkBoxChecked: true,
  checkBoxLabel: '',
  hideCross: false,
}

const Alert: FC<Props> = (props: Props) => {
  const renderProps = generateRenderProps(defaultProps, props)
  const {
    title,
    description,
    attention,
    loading,
    closePopup,
    popupIsOpen,
    showActionButton,
    handleAction,
    actionButtonTitle,
    cancelButtonTitle,
    showCheckBox,
    handleCheckBoxChange,
    checkBoxChecked,
    checkBoxLabel,
    hideCross,
  } = renderProps

  const renderAttention = () => {
    return (
      <div className="attention-icon-wrap" >
        {loading ?
          <Loading type='spinningBubbles' height='6rem' />
          :
          <svg className="attention-icon">
            <use xlinkHref="./sprite.svg#attention"></use>
          </svg>
        }
      </div>
    )
  }

  return (
    <Modal
      size="sm"
      show={popupIsOpen}
      onHide={closePopup}
      className="attention-popup"
    >
      {!hideCross && <button className="close-button" onClick={() => closePopup()} />}
      <Modal.Body>
        {title && <Modal.Title>{title}</ Modal.Title>}
        {attention && renderAttention()}
        {description && <p className="modal-description">{description}</p>}
        {showCheckBox && <Form.Check type="checkbox" className='modal-checkbox' id='checkbox'>
          <Form.Check.Input checked={checkBoxChecked} onChange={() => handleCheckBoxChange()} type="checkbox" />
          <Form.Check.Label>{checkBoxLabel}</Form.Check.Label>
        </Form.Check>}
      </Modal.Body>
      <Modal.Footer>
        <div className="buttons-wrap">
          {showActionButton && <Button variant="primary" onClick={() => handleAction()}>
            {actionButtonTitle}
          </Button>}
          <Button variant="secondary" onClick={() => closePopup()}>
            {cancelButtonTitle}
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  )
}

export default Alert
