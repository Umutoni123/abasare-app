import * as yup from "yup"

export const userSchema = yup.object().shape({
  first_name: yup.string().required("Required"),
  last_name: yup.string().required("Required"),
  email: yup.string().email("Please enter a valid email").required(),
  role: yup.string().required("Required"),
  password: yup.string().min(6).max(12).required("Required"),
  password_confirmation: yup.string()
     .oneOf([yup.ref('password'), null], 'Passwords must match')
});