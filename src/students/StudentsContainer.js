import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
// import fetchStudents from '../actions/students/fetch'
import subscribeToStudentsService from '../actions/students/subscribe'
import Title from '../components/Title'
import StudentItem from './StudentItem'
import './StudentsContainer.sass'

export class StudentsContainer extends PureComponent {
  static propTypes = {
    students: PropTypes.array.isRequired,
    // fetchStudents: PropTypes.func.isRequired,
    // subscribeToStudentsService: PropTypes.func.isRequired,
  }

  // componentDidMount() {
  //   // this.props.fetchStudents()
  //   this.props.subscribeToStudentsService()
  // }

  renderStudent(student, index) {
    return <StudentItem key={ index } { ...student } liked={ false } />
  }

  render() {
    return(
      <div className="students wrapper">
        <header>
          <Title content="Your Match" />
        </header>

        <main className="container">
          { this.props.students.map(this.renderStudent.bind(this)) }
        </main>
      </div>
    )
  }
}

const mapStateToProps = ({ students }) => ({ students })

export default connect(mapStateToProps, {
  // fetchStudents,
  // subscribeToStudentsService
})(StudentsContainer)
