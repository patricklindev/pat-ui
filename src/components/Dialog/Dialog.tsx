import React, {
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
  FC,
  useState,
} from 'react';
import Button from './DialogButton';
import Modal from './DialogWindow';
import './_Dialog.scss';
import Icon from '../Icon/Icon'


export interface IButtonProps {
  /** set open/close style */
  open?: boolean;
  /** set window full size */
  fullScreen?: boolean;
  /** set scroll option  */
  scroll?: boolean;
}



type NativeButtonProps = IButtonProps & ButtonHTMLAttributes<HTMLButtonElement>;
type NativeAchorButtonProps = IButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement>;
export type PatButtonProps = NativeButtonProps | NativeAchorButtonProps;

/**
 * A Dialog is overlaid modal paper based components with a backdrop.
 *
 * ```js
 * import {Dialog} from 'pat-ui'
 * ```
 */
export const Dialog: FC<PatButtonProps> = (props) => {
const [showModal, setShowModal] = useState(false);

const ModalHeader = props => {
    return <div className="modal__header">
        {props.children}
    </div>
}

const ModalBody = props => {
    return <div className="modal__body">
        {props.children}
    </div>
}

    return (
        <div>
            <Button onClick={() => setShowModal(true)}>
                Open Dialog
            </Button>
            <Modal
                show={showModal}
                setShow={setShowModal}
            >
                <ModalHeader>
                    <div>Set backup account</div>
                </ModalHeader>
                <ModalBody>
                    <div className="item" onClick={() => setShowModal(false)}>
                        <Icon
      color="grey"
      disabled={false}
      loading={false}
      name="users"
      size="small"
    />&nbsp; &nbsp; user@gmail.com
                    </div>
                       <div className="item" onClick={() => setShowModal(false)}>
                        <Icon size="small"
      color="grey"
      disabled={false}
      loading={false}
      name="users" 
    />&nbsp; &nbsp; user02@gmail.com
                    </div>
                       <div className="item" onClick={() => setShowModal(false)}>
                       <Icon
      disabled={true}
      loading={false}
      name="plus"
      size="small"
    />&nbsp; &nbsp;  &nbsp; Add account
                    </div>
                </ModalBody>
              
            </Modal>
        </div>
    );

};

Dialog.defaultProps = {
  open: false,
  fullScreen: false,
  scroll: false,
};




export default Dialog;