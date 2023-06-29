import { Formik, Form, Field, ErrorMessage } from 'formik';

function RegistrationForm() {
  return (
    <div>
      <h1>Registration Form</h1>
      <Formik
        initialValues={{ firstName: '', lastName: '', email: '', password: '' }}
        validate={values => {
          const errors = {};
          if (!values.firstName) {
            errors.firstName = 'Required';
          }
          // add validation for other fields
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label htmlFor="firstName">First Name</label>
              <Field type="text" name="firstName" />
              <ErrorMessage name="firstName" component="div" />
            </div>
            {/* add fields for other form inputs */}
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default RegistrationForm;