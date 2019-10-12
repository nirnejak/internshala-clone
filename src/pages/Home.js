import React, { Component } from 'react'
import Select from 'react-select'

import { withRouter } from 'react-router-dom';

import HeroImage from '../assets/hero.png'

class Home extends Component {
  state = {
    cities: [
      { label: 'Bangalore', value: 'bangalore' },
      { label: 'Hyderabad', value: 'hyderabad' },
      { label: 'Pune', value: 'pune' },
      { label: 'Mumbai', value: 'mumbai' },
      { label: 'Delhi', value: 'delhi' },
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
        <div className="hero is-fullheight-with-navbar">
          {/* <div className="hero-head text-center">Head</div> */}
          <div className="hero-body">
            <div className="container">
              <div className="columns is-vcentered">
                <div className="column is-4">
                  <h1 className="title has-text-primary">Find the best internships</h1>
                  <h2 className="subtitle">kickstart your career with best internships in the country</h2>
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
                <div className="column is-6 is-offset-2">
                  <img
                    src={HeroImage}
                    alt="Girl Working"
                    style={{ filter: 'hue-rotate(270deg)', }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="hero-foot has-text-centered bounce-animation">
            <i className="fas fa-chevron-down" />
            <br />
            <i
              className="fas fa-chevron-down"
              style={{
                position: 'relative',
                top: '-17px'
              }}
            />
          </div>
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