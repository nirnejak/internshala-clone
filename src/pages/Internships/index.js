import React, { Component } from 'react'

import Navbar from '../../components/Navbar'

export default class Internships extends Component {
  state = {
    formdata: {
      cities: [],
    },

    filterFields: {
      query: '',
      city: '',
      field: '',
      keywords: [],
    },
    paginationFields: {
      page: '',
      total: ''
    }
  }

  componentDidMount() {
    this.setState({
      ...this.state,
      filterFields: {
        ...this.state.filterFields,
        city: this.props.match.params.city || ''
      }
    })
  }

  render() {
    return (
      <div>
        <Navbar />
        Internships {this.state.filterFields.city && ` in ${this.state.filterFields.city}`}
      </div>
    )
  }
}
