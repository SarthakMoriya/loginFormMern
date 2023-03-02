import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { useFormik } from 'formik';
import { profileValidate } from '../helper/validate';
import convertToBase64 from '../helper/conert';


import Avatar from '../assets/profile.png'
import '../index.css'
import extend from '../styles/profile.module.css'
import styles from '../styles/Username.module.css'

const Profile = () => {
  const [file, setFile] = useState('')

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      mobile: '',
      address: ''
    },
    validate: profileValidate,
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
        <div className={`${styles.glass} ${extend.glass}`} style={{ width: "60%" }}>
          <div className="title flex flex-col items-center">
            <h4 className='text-5xl font-bold'>Update</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-5">You can Update your Details
            </span>
          </div>
          <form className='py-1' onSubmit={formik.handleSubmit}>
            {/* PROFILE */}
            <div className='profile flex justify-center py-4'>
              <label htmlFor='profile'>
                <img src={file || Avatar} className={`${styles.profile_img} ${extend.profile_img}`} alt='avatar' />
              </label>
              <input onChange={onUpload} type='file' id='profile' name='profile' />
            </div>

            <div className='textBox flex flex-col items-center py-4 my-2'>
              <div className='name flex w-3/4 gap-10'>
                {/* FIRST NAME */}
                <input {...formik.getFieldProps('firstName')} type='text' placeholder='FIRST NAME' className={`${styles.textbox} ${extend.textbox}`} />
                {/* LAST NAME */}
                <input {...formik.getFieldProps('lastName')} type='text' placeholder='LAST NAME' className={`${styles.textbox} ${extend.textbox}`} />
              </div>
              <div className='name flex w-3/4 gap-10'>
                {/* PHONE NUMBER */}
                <input {...formik.getFieldProps('mobile')} type='number' placeholder='PHONE NUMBER' className={`${styles.textbox} ${extend.textbox}`} />
                {/* EMAIL ADDRESS */}
                <input {...formik.getFieldProps('email')} type='text' placeholder='EMAIL ADDRESS' className={`${styles.textbox} ${extend.textbox}`} />
              </div>
              {/* ADDRESS */}
              <input {...formik.getFieldProps('address')} type='text' placeholder='ADDRESS' className={`${styles.textbox} ${extend.textbox}`} />
              <button type='submit' className={styles.btn}>UPDATE</button>
            </div>
            <div className='text-center py-4'>
              <span className='text-gray-500'>Come back later?
                <Link className='text-red-500 ml-1' to="/">
                  Logout
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Profile