import React, { Component } from 'react'

export default class Register extends Component {
  state = {
    formFields: {
      name: "",
      username: "",
      email: "",
      password: "",
      confirm_password: "",
    }
  }

  inputEventHandler = event => {
    let formFields = this.state.formFields
    formFields[event.target.name] = event.target.value
    this.setState({
      ...this.state,
      formFields
    })
  }

  submitEventHandler = event => {
    event.preventDefault()
    // TODO: Make API Call to register user
  }

  render() {
    return (
      <div className="hero is-fullheight-with-navbar is-primary is-bold">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-vcentered">
              <div className="column is-8">

              </div>
              <div className="column is-4">
                <div className="card">
                  <div className="card-content">
                    <h1 className="title has-text-dark has-text-centered">Register</h1>
                    <form onSubmit={this.submitEventHandler}>
                      <div className="field">
                        <div className="label">Name</div>
                        <div className="control">
                          <input
                            type="text"
                            name="name"
                            className="input"
                            placeholder="e.g. John Doe"
                            onChange={this.inputEventHandler}
                          />
                        </div>
                      </div>
                      <div className="field">
                        <div className="label">Username</div>
                        <div className="control">
                          <input
                            type="text"
                            name="username"
                            className="input"
                            placeholder="Your unique username"
                            onChange={this.inputEventHandler}
                          />
                        </div>
                      </div>
                      <div className="field">
                        <div className="label">Email</div>
                        <div className="control">
                          <input
                            type="email"
                            name="email"
                            className="input"
                            placeholder="e.g. user@example.com"
                            onChange={this.inputEventHandler}
                          />
                        </div>
                      </div>
                      <div className="field">
                        <div className="label">Password</div>
                        <div className="control">
                          <input
                            type="password"
                            name="password"
                            className="input"
                            placeholder="Choose your password"
                            onChange={this.inputEventHandler}
                          />
                        </div>
                      </div>
                      <div className="field">
                        <div className="label">Confirm Password</div>
                        <div className="control">
                          <input
                            type="password"
                            name="confirm_password"
                            className="input"
                            placeholder="Confirm your password"
                            onChange={this.inputEventHandler}
                          />
                        </div>
                      </div>
                      <button type="submit" className="button is-primary">
                        Register
                    </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
