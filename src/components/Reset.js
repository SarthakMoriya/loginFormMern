import React from 'react'
import { Link } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { useFormik } from 'formik';
import { resetPasswordValidate } from '../helper/validate';


import '../index.css'
import styles from '../styles/Username.module.css'

const Reset = () => {

  const formik = useFormik({
    initialValues: {
      password:'',
      confirmPassword:'',
    },
    validate: resetPasswordValidate,
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
            <h4 className='text-5xl font-bold'>Reset</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-5">Enter new password
            </span>
          </div>
          <form className='pt-20' onSubmit={formik.handleSubmit}>
            <div className='textBox flex flex-col items-center py-4 gap-6'>
              <div className='input text-center'>
                <input {...formik.getFieldProps('password')} type='password' placeholder='Enter new password' className={styles.textbox} />
                <input {...formik.getFieldProps('confirmPassword')} type='password' placeholder='Confirm new password' className={styles.textbox} />
              </div>
              <button type='submit' className={styles.btn}>Sign In</button>
            </div>
            <div className='text-center py-4'>
              <span className='text-gray-500'>New here ?
                <Link className='text-red-500 ml-1' to="/register">
                  Register
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Reset