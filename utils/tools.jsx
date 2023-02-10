import { toast } from 'react-toastify'

export const ShowToast = (type, msg) => {
  switch (type) {
    case 'SUCCESS':
      toast.success(msg, {})
      break
    case 'ERROR':
      toast.error(msg, {
        position: toast.POSITION.BOTTOM_RIGHT,
      })
      break

    default:
      return false
  }
}

export const errorHelper = (formik, value) => ({
  error: formik.errors[value] && formik.touched[value] ? true : false,
  helperText:
    formik.errors[value] && formik.touched[value] ? formik.errors[value] : null,
})
