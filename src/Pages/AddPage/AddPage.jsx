import React, { useEffect, useState } from 'react'
import './add.scss'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function AddPage() {
const [image, setImage] = useState("")
const [name, setName] = useState("")
const [price, setPrice] = useState("")

useEffect(() => {
  fetch("http://localhost:3400/"), {
    method: "POST",
    body: JSON.stringify({
      image: image,
      name: name,
      price: price
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }
}, [])

  return (
    <div>
        <Formik
       initialValues={{ image: '', name: '', price: '' }}
       validationSchema={Yup.object({
         image: Yup.string()
           .required('Required'),
         name: Yup.string()
           .required('Required'),
         price: Yup.string()
         .required('Required'),
       })}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
          setImage((e) => e.target.value)
           setSubmitting(false);
         }, 400);
       }}
     >
       <Form>
         <label htmlFor="image">image</label>
         <Field name="image" type="text" />
         <ErrorMessage name="image" />
 
         <label htmlFor="name"> Name</label>
         <Field name="name" type="text" />
         <ErrorMessage name="name" />
 
         <label htmlFor="price">price</label>
         <Field name="price" type="price" />
         <ErrorMessage name="price" />
 
         <button type="submit">Submit</button>
       </Form>
     </Formik>

    </div>
  )
}

export default AddPage