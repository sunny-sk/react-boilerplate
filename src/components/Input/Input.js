import PropTypes from 'prop-types';
import React, { forwardRef, useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

import Classes from './Input.module.css';
const InputComp = forwardRef(
  (
    {
      inputClassName,
      inputConClassName,
      leftIcon,
      rightIcon,
      label,
      error,
      type,
      info,
      onClickRight,
      htmlFor,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    return (
      <div className={` ${Classes.inputCon} ${inputConClassName}`}>
        {label && <label htmlFor={htmlFor}>{label}</label>}
        <div className={`input-group mb-2 ${Classes.inputGroup}`}>
          {leftIcon && (
            <div className={'input-group-prepend'}>
              <div className={`input-group-text ${Classes.inputPrependText}`}>
                {leftIcon}
              </div>
            </div>
          )}
          <input
            ref={ref}
            type={showPassword ? 'text' : type}
            id={htmlFor}
            className={`form-control ${Classes.input} ${inputClassName}`}
            {...props}
          />
          {rightIcon && (
            <div className={'input-group-prepend'}>
              {type === 'password' ? (
                <div
                  onClick={() => setShowPassword(!showPassword)}
                  className={`input-group-text ${Classes.inputPostpendText}`}>
                  {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </div>
              ) : (
                <div
                  onClick={onClickRight}
                  className={`input-group-text ${Classes.inputPostpendText}`}>
                  {rightIcon}
                </div>
              )}
            </div>
          )}
        </div>
        {info && <small className="form-text text-muted">{info}</small>}
        {error && <small className="form-text text-danger">{error}</small>}
      </div>
    );
  }
);

export default InputComp;
InputComp.displayName = 'Input';
InputComp.propTypes = {
  inputClassName: PropTypes.string,
  inputConClassName: PropTypes.string,
  inputGroupClassName: PropTypes.string,
  htmlFor: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.string,
  label: PropTypes.string,
  info: PropTypes.string,
  onClickRight: PropTypes.func,
  leftIcon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.elementType,
    PropTypes.element,
  ]),
  rightIcon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.elementType,
    PropTypes.element,
  ]),
};
