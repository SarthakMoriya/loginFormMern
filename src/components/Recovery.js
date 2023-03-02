import React from 'react'
import { Link } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { useFormik } from 'formik';
import { usernameValidate } from '../helper/validate';


import Avatar from '../assets/profile.png'
import '../index.css'
import styles from '../styles/Username.module.css'

const Recovery = () => {

  const formik = useFormik({
    initialValues: {
      username: ''
    },
    validate: usernameValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async values => {
      console.log(values)
    }
  })

  return (
    <div className="container mx-auto">
      <Toaster position='top-center' reverseOrder={false} />
      <div className="flex justify-center items-center h-screen">
        <div className={styles.glass}>
          <div className="title flex flex-col items-center">
            <h4 className='text-5xl font-bold'>Recovery</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-5">Enter OTP to recover password.
            </span>
          </div>


          <form className='pt-20' onSubmit={formik.handleSubmit}>

            <div className='textBox flex flex-col items-center py-4 gap-6'>

              <div className='input text-center'>
                <span className="py-4 text-sm text-left text-gray-500">
                  Enter 6 digit OPT send to your email address.
                </span>
                <input {...formik.getFieldProps('username')} type='text' placeholder='OTP' className={styles.textbox} />
              </div>
              <button type='submit' className={styles.btn}>Sign In</button>
            </div>
            <div className='text-center py-4'>
              <span className='text-gray-500'>Can't get OTP?
                <button className='text-red-500 ml-1' to="/register">
                  Resend
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Recovery