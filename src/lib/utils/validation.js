import * as yup from 'yup';
export const loginSchema = yup.object().shape({
  loginId: yup.string().required().min(5).label('Full name or email'),
  password: yup.string().required().min(5).label('Password'),
});

export const registerSchema = yup.object().shape({
  password: yup
    .string()
    .required()
    .min(8, 'At least enter 8 characters')
    .label('Password'),
  userEmail: yup.string().email().required().label('Email'),
});
