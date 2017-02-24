import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import fetchStudents from '../actions/students/fetch'
import Title from '../components/Title'

export class StudentPage extends PureComponent {
  static propTypes = {}

  componentDidMount() {
    this.props.fetchStudents()
  }

  render() {
    const { title } = this.props

    return(
      <div className="student page">
        <Title content={ title || 'Loading...' } />
      </div>
    )
  }
}

const mapStateToProps = ({ students }, { params }) => {
  const student = students.reduce((prev, next) => {
    if (next._id === params.studentId) {
      return next
    }
    return prev
  }, {})

  return {
    ...student
  }
}

export default connect(mapStateToProps, { fetchStudents })(StudentPage)
