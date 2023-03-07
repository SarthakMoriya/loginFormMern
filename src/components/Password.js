import React from 'react'
import { Link } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { useFormik } from 'formik';
import { passwordValidate } from '../helper/validate';


import Avatar from '../assets/profile.png'
import '../index.css'
import styles from '../styles/Username.module.css'

const Password = () => {

  const formik = useFormik({
    initialValues: {
      password: ''
    },
    validate: passwordValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async values => {
      console.log(values)
    }
  })

  return (
    <div className="container mx-auto">
      <Toaster position='top-center' reverseOrder={false}/>
      <div className="flex justify-center items-center h-screen">
        <div className={styles.glass}>
          <div className="title flex flex-col items-center">
            <h4 className='text-5xl font-bold'>Hello Again!</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-5">Explore More by connecting with us.
            </span>
          </div>
          <form className='py-1' onSubmit={formik.handleSubmit}>
            <div className='profile flex justify-center py-4'>
              <img src={Avatar} className={styles.profile_img} alt='avatar' />
            </div>
            <div className='textBox flex flex-col items-center py-4 my-2'>
              <input {...formik.getFieldProps('password')} type='password' placeholder='Password' className={styles.textbox} />
              <button type='submit' className={styles.btn}>Let's Go</button>
            </div>
            <div className='text-center py-4'>
              <span className='text-gray-500'>Not a Member
                <Link className='text-red-500' to="/register">
                  Register Now
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Password