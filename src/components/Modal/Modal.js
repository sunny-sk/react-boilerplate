/* eslint-disable react/prop-types */
import React from 'react';
import { createPortal } from 'react-dom';
import { Transition } from 'react-transition-group';

import classes from './Modal.module.css';
const duration = 500;
const body = document.body;

const Overlay = (props) => {
  return <div onClick={props.onClick} className={props.overlayClasses} />;
};

const Content = (props) => {
  return <div className={props.contentClasses}>{props.children}</div>;
};

const Modal = (props) => {
  const onClickOverlayHandler = () => {
    if (props.disableOverClose) {
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
          props.contentClasses,
        ];
        const finalOverlayClasses = [
          classes.overlay,
          state === 'entering'
            ? classes.animate
            : state === 'exiting'
            ? classes.reAnimate
            : null,
          props.overlayClasses,
        ];
        return (
          <>
            {createPortal(
              <Overlay
                overlayClasses={finalOverlayClasses.join(' ')}
                onClick={onClickOverlayHandler}></Overlay>,
              body
            )}
            {createPortal(
              <Content contentClasses={finalContentClasses.join(' ')}>
                {props.children}
              </Content>,
              body
            )}
          </>
        );
      }}
    </Transition>
  );
};

export default Modal;

// example:
// <Modal overlayClasses disableOverClose={true} isOpen={false} onClose={() => {}}>
//   modal data
// </Modal>;
