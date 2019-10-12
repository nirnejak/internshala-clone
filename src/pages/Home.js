import React, { Component } from 'react'
import Select from 'react-select'

import Navbar from '../components/Navbar'

export default class Home extends Component {
  state = {
    cities: [
      {
        label: 'Bangalore',
        value: 'bangalore'
      },
      {
        label: 'Hyderabad',
        value: 'hyderabad'
      },
      {
        label: 'Pune',
        value: 'pune'
      },
      {
        label: 'Mumbai',
        value: 'mumbai'
      },
    ]
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
                  <br/>
                  <Select options={this.state.options} placeholder="Select City..." className="w-50" />
                  <br />
                  <button className="button is-primary is-medium">
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
