// pages/add-edit-post.js
import React from 'react';
import {  useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { addPost, editPost } from '../redux/action';

const AddEditPostPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const initialValues = {
    title: '',
    summary: '',
    content: '',
    publicationDate: '',
  };

  const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    summary: Yup.string().required('Summary is required'),
    content: Yup.string().required('Content is required'),
    publicationDate: Yup.date().required('Publication date is required'),
  });

  const handleSubmit = (values) => {
   
    // Use dispatch to save the form data in the Redux store
    if (values.id) {
      dispatch(editPost(values));
    } else {
      dispatch(addPost(values));
      
    }
    router.push('/');
  };

  return (
    <div className='addpostpage d-flex align-items-center justify-content-center'>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        <Form className='d-flex flex-column addpostForm'>
      <h1 className='w-100 text-center'>Add Post</h1>
          <div className='d-flex flex-column'>
            <label htmlFor="title">Title</label>
            <Field className="inputField" type="text" id="title" name="title" />
            <ErrorMessage name="title" component="div" className='text-danger' />
          </div>
          <div className='d-flex flex-column'>
            <label htmlFor="summary">Summary</label>
            <Field className="inputField" type="text" id="summary" name="summary" />
            <ErrorMessage name="summary" component="div" className='text-danger' />
          </div>
          <div className='d-flex flex-column'>
            <label htmlFor="content">Content</label>
            <Field className="inputField" as="textarea" id="content" name="content" />
            <ErrorMessage name="content" component="div" className='text-danger' />
          </div>
          <div className='d-flex flex-column'>
            <label htmlFor="publicationDate">Publication Date</label>
            <Field className="inputField" type="date" id="publicationDate" name="publicationDate" />
            <ErrorMessage name="publicationDate" component="div" className='text-danger' />
          </div>
          <button type="submit" className='savepostbtn'>Save Post</button>
        </Form>
      </Formik>
    </div>
  );
};

export default AddEditPostPage;