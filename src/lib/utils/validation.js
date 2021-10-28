import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  loginId: yup.string().required().min(5).label('Email or Username'),
  password: yup.string().required().min(5).label('Password'),
});

export const emailSchema = yup.object().shape({
  email: yup.string().email().required().min(5).label('Email'),
});

export const resetPasswordSchema = yup.object().shape({
  password: yup.string().min(8).required().label('Password'),
  confirmPassword: yup
    .string()
    .required()
    .label('Confirm password')
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});

export const registerSchema = yup.object().shape({
  password: yup
    .string()
    .required()
    .min(8, 'At least enter 8 characters')
    .label('Password'),
  userEmail: yup.string().email().required().label('Email'),
});
