import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { createPost } from '../actions/index'
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


class PostsNew extends Component {
  render() {
    const { handleSubmit } = this.props

    return (
      <form className="container" onSubmit={handleSubmit(createPost)}>
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

      </form>
    )
  }
}

//reduxForm acts like connect
//connect: 1rst argument is mapStateToProps, 2nd is mapDispatchToProps
//reduxForm: 1rst is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps

export default reduxForm({
  form: 'PostsNewForm',
}, null, { createPost })(PostsNew)
