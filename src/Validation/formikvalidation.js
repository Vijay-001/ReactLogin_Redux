import { Formik } from "formik";

<Formik
    initialValues={this.state.InitialFormValues}
    onSubmit={(values, { setSubmitting }) => {
     // handle submit
    }}
    validationSchema={loginValidation}
   >
   {props => {
     const {
       firstName,
       lastName
       handleSubmit,
       handleReset
    } = props;
  return (
    <form onSubmit={handleSubmit}>
    </form>
  )
</Formik>
