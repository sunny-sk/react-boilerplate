import PropTypes from 'prop-types';
import React from 'react';
import { createPortal } from 'react-dom';
import { Transition } from 'react-transition-group';

import classes from './Modal.module.css';
const duration = 400; // should be less then the animation timeout
const body = document.body;

const Modal = (props) => {
  const onClickOverlayHandler = () => {
    if (props.disableOverlayClose) {
      //
    } else {
      if (props.onClose) {
        props.onClose(false);
      }
    }
  };

  return (
    <Transition in={props.isOpen} unmountOnExit mountOnEnter timeout={duration}>
      {(state) => {
        const finalContentClasses = [
          classes.content,
          state === 'entering'
            ? classes.animate
            : state === 'exiting'
            ? classes.reAnimate
            : null,
          props.contentClassName,
        ];
        const finalOverlayClasses = [
          classes.overlay,
          state === 'entering'
            ? classes.animate
            : state === 'exiting'
            ? classes.reAnimate
            : null,
          props.overlayClassName,
        ];
        return (
          <>
            {createPortal(
              <div
                onClick={onClickOverlayHandler}
                className={finalOverlayClasses.join(' ')}
              />,
              body
            )}
            {createPortal(
              <div className={finalContentClasses.join(' ')}>
                {props.children}
              </div>,
              body
            )}
          </>
        );
      }}
    </Transition>
  );
};

export default React.memo(Modal);

Modal.displayName = 'Modal';
Modal.propTypes = {
  isOpen: PropTypes.bool,
  disableOverlayClose: PropTypes.bool,
  onClose: PropTypes.func,
  contentClassName: PropTypes.string,
  overlayClassName: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.elementType,
    PropTypes.element,
  ]),
};

// example:
// <Modal overlayClasses disableOverClose={true} isOpen={false} onClose={() => {}}>
//   modal data
// </Modal>;
