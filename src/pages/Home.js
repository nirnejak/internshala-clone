import React, { Component } from 'react'
import Select from 'react-select'

import { withRouter } from 'react-router-dom';

import Navbar from '../components/Navbar'

class Home extends Component {
  state = {
    cities: [
      { label: 'Bangalore', value: 'bangalore' },
      { label: 'Hyderabad', value: 'hyderabad' },
      { label: 'Pune', value: 'pune' },
      { label: 'Mumbai', value: 'mumbai' },
    ]
  }

  inputEventHandler = (event, field) => {
    if (field === 'city') {
      this.setState({
        ...this.state,
        selectedCity: event.value
      })
    }
  }

  navigatePage = link => {
    if (link === 'internships') {
      this.props.history.push(`internships/${this.state.selectedCity || ''}`)
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="hero is-fullheight">
          <Navbar />
          {/* <div className="hero-head text-center">Head</div> */}
          <div className="hero-body">
            <div className="container">
              <div className="row">
                <div className="column is-one-third">
                  <h1 className="title has-text-primary">Find the best internships</h1>
                  <h2 className="subtitle">lorem ipsum dolor set amet</h2>
                  <br />
                  <Select
                    placeholder="Select City..."
                    className="w-50"
                    required={true}
                    options={this.state.cities}
                    onChange={e => this.inputEventHandler(e, 'city')}
                  />
                  <br />
                  <button className="button is-primary is-medium" onClick={e => this.navigatePage('internships')}>
                    Search Internships
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="hero-foot">Foot</div> */}
        </div>
        <div className="hero is-large is-primary is-bold">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Hello there</h1>
              <h2 className="subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, non culpa recusandae dicta similique dolorem rerum dolore ut. In dolores non quaerat delectus aut maxime soluta sequi perferendis et nemo.</h2>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}


export default withRouter(Home)