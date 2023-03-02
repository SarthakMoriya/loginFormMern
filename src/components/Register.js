import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { useFormik } from 'formik';
import { registerValidate } from '../helper/validate';
import convertToBase64 from '../helper/conert';


import Avatar from '../assets/profile.png'
import '../index.css'
import styles from '../styles/Username.module.css'

const Register = () => {
  const [file, setFile] = useState('')

  const formik = useFormik({
    initialValues: {
      username: 'daya',
      email: 'daya@gmail.com',
      password: 'dayaben'
    },
    validate: registerValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async values => {
      values = await Object.assign(values, { profile: file || "" })
      console.log(values)
    }
  })

  /** Formik doesnot support file handling so we need to create file handler */
  const onUpload = async e => {
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64)
  }
  return (
    <div className="container mx-auto">
      <Toaster position='top-center' reverseOrder={false} />
      <div className="flex justify-center items-center h-screen">
        <div className={styles.glass} style={{ width: "60%" }}>
          <div className="title flex flex-col items-center">
            <h4 className='text-5xl font-bold'>Register</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-5">Create new Account
            </span>
          </div>
          <form className='py-1' onSubmit={formik.handleSubmit}>
            {/* PROFILE */}
            <div className='profile flex justify-center py-4'>
              <label htmlFor='profile'>
                <img src={file || Avatar} className={styles.profile_img} alt='avatar' />
              </label>
              <input onChange={onUpload} type='file' id='profile' name='profile' />
            </div>

            <div className='textBox flex flex-col items-center py-4 my-2'>
              <input {...formik.getFieldProps('email')} type='text' placeholder='Email Address*' className={styles.textbox} />
              <input {...formik.getFieldProps('username')} type='text' placeholder='Username*' className={styles.textbox} />
              <input {...formik.getFieldProps('password')} type='text' placeholder='Password*' className={styles.textbox} />
              <button type='submit' className={styles.btn}>Let's Go</button>
            </div>
            <div className='text-center py-4'>
              <span className='text-gray-500'>Already Registered
                <Link className='text-red-500 ml-1' to="/">
                  Login
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register