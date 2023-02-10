import * as Yup from 'yup'

export const login = Yup.object({
  email: Yup.string()
    .trim()
    .required('The email field is required')
    .email('The  email is invalid'),
  password: Yup.string()
    .trim()
    .required('The password field cannot be empty')
    .min(6, 'Password should be minimum of 6 character'),
})

export const register = Yup.object({
  name: Yup.string().trim().required('The name field is required'),
  email: Yup.string()
    .trim()
    .required('The email field is required')
    .email('The  email is invalid'),
  confirmEmail: Yup.string()
    .trim()
    .oneOf([Yup.ref('email'), null], 'Email does not match')
    .required('The password field cannot be empty'),
  password: Yup.string()
    .trim()
    .required('The password field cannot be empty')
    .min(6, 'Password should be minimum of 6 character'),
  confirmPassword: Yup.string()
    .trim()
    .oneOf([Yup.ref('password'), null], 'Password does not match')
    .required('The password field cannot be empty'),
})

export const createProfile = Yup.object({
  firstname: Yup.string().trim().required('firstname field is required'),
  lastname: Yup.string().trim().required('lastname field is required'),
  gender: Yup.string().trim().required('Gender field is required'),
  age: Yup.string()
    .trim()
    .required('age field is required')
    .min(2, 'You should be at least 18 years of age'),
  birthday: Yup.string().trim().required('birthday field is required'),
  nationality: Yup.string().trim().required('Nationality field is required'),
  height: Yup.string().trim().required('height field is required'),
  weight: Yup.string().trim().required('weight field is required'),
  hairColor: Yup.string().trim().required('hair color field is required'),
  country: Yup.string().trim().required('country field is required'),
  city: Yup.string().trim().required('city field is required'),
  sport: Yup.string().trim().required('sport field is required'),
  languages: Yup.string().trim().required('languages field is required'),
  smoker: Yup.string().trim().required('smoker field is required'),
  hobbies: Yup.string().trim().required('hobbies field is required'),
  proffession: Yup.string().trim().required('proffession field is required'),
  hashtags: Yup.string().trim().required('hashtags field is required'),
  covid: Yup.string().trim().required('covid field is required'),
  message: Yup.string().trim().required('message field is required'),

  images: Yup.array().min(4, 'minimum of 4 images allowed').nullable(4, '4'),
})
