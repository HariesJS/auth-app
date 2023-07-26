import { useState } from "react"
import './styles.less'
import { CheckCircleOutlined, CloseOutlined } from "@ant-design/icons";
import { ModalProps } from "./interface";
import { Button } from "../Button";

export const Modal = ({ isOpen, onClose, text, withButtons, firstButtonTitle, secondButtonTitle }: ModalProps) => {
    if (!isOpen) return null;
  
    return (
      <div className='modal-wrapper'>
        <div className="modal">
            <CloseOutlined
                className="modal-close"
                onClick={onClose}
            />
          <CheckCircleOutlined className='modal-check' />
          <p className='modal-description'>{text}</p>
          {withButtons && (
            <div className='modal-buttons'>
                <Button
                    className='modal-button'
                    title={`${firstButtonTitle}`}
                    type='default'
                />
                <Button
                    className='modal-button'
                    title={`${secondButtonTitle}`}
                    type='default'
                    ghost
                />
            </div>
          )}
        </div>
      </div>
    )
}