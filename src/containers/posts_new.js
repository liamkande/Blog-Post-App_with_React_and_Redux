import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form' // add reset here if you want to use form reset below
import { createPost } from '../actions/index'
import { NavLink } from 'react-router-dom'
import Required from '../components/inputFieldError'


  const required = value => (value ? undefined : <Required />)

  const renderField = ({
    input,
    type,
    meta: { touched, error }
  }) => (
    <div>
      <input {...input} type={type} className="form-control"/>
      {touched &&
       ((error && <span className="error">{error}</span>)) }
    </div>
  )

  const renderTextArea = field =>
    <div>
      <textarea {...field.input} type={field.type} className="form-control"/>
      {field.meta.touched &&
       field.meta.error &&
       <span className="error">{field.meta.error}</span>}
    </div>

//This could be use if we want to reset the form value after valid entry
  //const afterSubmit = (result, dispatch) =>
  //  dispatch(reset('PostsNewForm'))


//This will help manage an redirection after form validation
let formIsValide = false

class PostsNew extends Component {
  onSubmit(props) {
      createPost(props)
      formIsValide  = true
      console.log('A new post was Added!')
  }

  redirectToIndexPage() {
    return formIsValide ? this.props.history.push("/") : null
  }

  render() {
    const { handleSubmit } = this.props

    return (
      <div onSubmit={this.redirectToIndexPage.bind(this)}>
      <form className="container" onSubmit={handleSubmit(this.onSubmit)}>
        <h3>Create A New Post</h3>
        <div className="form-group">
          <label>Title</label>
          <Field name="title" component={renderField} type="text" validate={required} />
        </div>

        <div className="form-group">
          <label>Categories</label>
          <Field name="categories" component={renderField} type="text"  validate={required} />
        </div>

        <div className="form-group">
          <label>Content</label>
          <Field name="content" component={renderTextArea} type="text" validate={required} />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
        <NavLink to="/" className="btn btn-danger ml-2">Cancel</NavLink>

      </form>
    </div>
    )
  }
}

//reduxForm acts like connect
//connect: 1rst argument is mapStateToProps, 2nd is mapDispatchToProps
//reduxForm: 1rst is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps

export default reduxForm({
  form: 'PostsNewForm'
  //This could be use if we want to reset the form value after valid entry see function above.
  //onSubmitSuccess: afterSubmit,
}, null, { createPost })(PostsNew)
