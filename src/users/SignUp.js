import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { history } from '../store'
import signUp from '../actions/user/sign-up'
import Title from '../components/Title'
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'

const dialogStyle = {
  width: '400px',
  margin: '50px auto',
  padding: '2rem',
}

const buttonStyle = {
  float: 'right',
  marginLeft: '2rem',
}

export class SignUp extends PureComponent {
  constructor() {
    super()
    this.state = {}
  }

  submitForm(event) {
    event.preventDefault()
    if (this.validateAll()) {
      const user = {
        name: this.refs.name.value,
        email: this.refs.email.value,
        password: this.refs.password.value
      }
      this.props.signUp(user)
    }
  }

  validateAll() {
    return this.validateName() &&
      this.validateEmail() &&
      this.validatePassword() &&
      this.validatePasswordConfirmation()
  }

  validateName() {
    const { name } = this.refs

    if (name.value.length > 1) {
      this.setState({
        nameError: null
      })
      return true
    }

    this.setState({
      nameError: 'Please provide your name'
    })
    return false
  }

  validateEmail() {
    const { email } = this.refs

    if (email.value.match(/^[a-z0-9.\_-]+@[a-z0-9.\_-]+\.[a-z0-9.\_-]+$/)) {
      this.setState({
        emailError: null
      })
      return true
    }

    if (email.value === '') {
      this.setState({
        emailError: 'Please provide your email address'
      })
      return false
    }

    this.setState({
      emailError: 'Please provide a valid email address'
    })
    return false
  }

  validatePassword() {
    const { password, passwordConfirmation } = this.refs

    if (password.value.length < 6) {
      this.setState({
        passwordError: 'Password is too short'
      })
      return false
    }

    if (password.value.match(/[a-zA-Z]+/) && password.value.match(/[0-9]+/)) {
      this.setState({
        passwordError: null
      })
      return true
    }

    this.setState({
      passwordError: 'Password should contain both letters and numbers'
    })
    return false
  }

  validatePasswordConfirmation() {
    const { password, passwordConfirmation } = this.refs

    if (password.value === passwordConfirmation.value) {
      this.setState({
        passwordConfirmationError: null
      })
      return true
    }

    this.setState({
      passwordConfirmationError: 'Passwords do not match'
    })
    return false
  }

  signIn() {
  history.push('/sign-in')
}


  render() {
    return (
      <Paper style={ dialogStyle }>
        <div className="sign-up form">
          <Title content="Sign Up" />

          <form onSubmit={this.submitForm.bind(this)}>
            <div className="input">
              <input ref="name" type="text" placeholder="Your name"
                onChange={this.validateName.bind(this)} />
              { this.state.nameError ?
                <p className="formError">{ this.state.nameError }</p> :
                null
              }
            </div>
            <div className="input">
              <input ref="email" type="email" placeholder="Email address"
                onChange={this.validateEmail.bind(this)} />
              { this.state.emailError ?
                <p className="formError">{ this.state.emailError }</p> :
                null
              }
            </div>
            <div className="input">
              <input ref="password" type="password" placeholder="Password"
                onChange={this.validatePassword.bind(this)} />
              { this.state.passwordError ?
                <p className="formError">{ this.state.passwordError }</p> :
                null
              }
            </div>
            <div className="input">
              <input ref="passwordConfirmation" type="password" placeholder="Repeat Password"
                onKeyUp={this.validatePasswordConfirmation.bind(this)}
                onChange={this.validatePasswordConfirmation.bind(this)} />
              { this.state.passwordConfirmationError ?
                <p className="formError">{ this.state.passwordConfirmationError }</p> :
                null
              }
            </div>
            <FlatButton
              onClick={ this.signIn }
              label="Sign in" />
            <RaisedButton
              style={ buttonStyle }
              onClick={ this.submitForm.bind(this) }
              label="Sign up"
              primary={true} />
          </form>
        </div>
      </Paper>
    )
  }
}

export default connect(null, { signUp })(SignUp)