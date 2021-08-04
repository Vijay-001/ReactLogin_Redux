import React,{ useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { update } from '../_actions';

const DisplayingErrorMessagesSchema  = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  username: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(4, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
});

  export const UpdateDetails = (props) => {
  return(
    <div>
      <h3>Update Registration form</h3>
      <Formik
        initialValues={{
          firstName: '',
          username: '',
          lastName:'',
          password:''
        }}
        validationSchema={DisplayingErrorMessagesSchema}
        onSubmit={values => {
           values.id=props.UserId;
           let user = values;
           props.update(user);
           console.log("Hellow===",user);
            // ParentCallback(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <label htmlFor="firstName">First Name  : </label>
            <Field name="firstName"/>
            <label>{touched.firstName && errors.firstName && <div>{errors.firstName}</div>}</label>
            <p></p>
            <label htmlFor="lastName">lastName  : </label>
            &nbsp;&nbsp;<Field name="lastName" />
            <label>{touched.lastName && errors.lastName && <div>{errors.lastName}</div>}</label>
            <p></p>
              <label htmlFor="username">username :  </label>
            &nbsp;<Field name="username" />
            <label>{touched.username && errors.username && <div>{errors.username}</div>}</label>
            <p></p>
            <label htmlFor="username">password :</label>
            &nbsp;<Field name="password" />
            <label>{touched.password && errors.password && <div>{errors.password}</div>}</label>
            <p></p>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}


// function mapState(state) {
//     const { users, authentication } = state;
//     const { user } = authentication;
//     return { user, users };
// }
//
// // const actionCreators = {
// //     getUsers: getAll,
// //     deleteUser: _delete,
// //     // updateUser: userActions.update
// // }
//
// const mapDispatchToProps = (dispatch) => {
//     return{
//       update: (user) => {
//          dispatch(update(user))
//       }
//     }
// }
//
// const connectedUpdateDetails = connect(mapState, mapDispatchToProps)(UpdateDetails);
// export { connectedUpdateDetails as UpdateDetails };
