import axios from 'axios'
import CustomButton from '../UI/CustomButton'
import { RiErrorWarningFill } from 'react-icons/ri'

export const VerifyEmailAddress = () => {
  const handleSubmit = () => {
    try {
      axios.get('/users/confirm-email')
      ShowToast('SUCCESS', 'Email verification successful')
    } catch (error) {
      ShowToast('ERROR', 'Email verification failed')
    }
  }
  const handleResend = () => {
    try {
      axios.get('/users/resend-email-confirmation')
      ShowToast('SUCCESS', 'Email verification successful')
    } catch (error) {
      ShowToast('ERROR', 'Email verification failed')
    }
  }
  return (
    <div className="flex justify-center items-center lg:mt-12">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl font-normal text-yellow-600 uppercase font-serif text-center">
          VERIFY YOUR EMAIL
        </h1>
        <p className="text-gray-500 text-sm text-center pt-[1rem] pb-[2rem] font-sans">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          incidunt sapiente debitis ipsa laudantium, mollitia similique
          officiis, quis quibusdam, magni corporis maiores? Architecto ullam,
          porro quo fugiat consequatur ut aliquam. Blanditiis
        </p>
        <div className="flex flex-col gap-4 w-[60%] mx-auto">
          <CustomButton
            text="Send verification"
            className="py-2 px-5 rounded-full text-sm text-white normal-case bg-primary hover:bg-red-400"
            onClick={handleSubmit}
          />
          <CustomButton
            text="Send Again"
            onClick={handleResend}
            className="py-2 px-5 text-sm hover:bg-gray-100 bg-white border text-primary normal-case border-primary rounded-full "
          />
        </div>
        <div className="mt-12 lg:w-[70%] mx-auto flex flex-col items-center ">
          <RiErrorWarningFill className="text-primary text-[2rem]" />
          <p className="text-gray-500 text-sm text-center pb-[2rem] font-sans">
            Please check spam folder for verification if email does not show
          </p>
        </div>
      </div>
    </div>
  )
}
