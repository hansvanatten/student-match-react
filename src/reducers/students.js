import { FETCHED_STUDENTS } from '../actions/students/fetch'
import {
  STUDENT_CREATED,
  STUDENT_UPDATED,
  STUDENT_REMOVED
} from '../actions/students/subscribe'

export default (state = [], { type, payload } = {}) => {
  switch(type) {
    case FETCHED_STUDENTS :
      return [].concat(payload)

    case STUDENT_CREATED :
      const newStudent = Object.assign({}, payload)
      return [newStudent].concat(state)

    case STUDENT_UPDATED :
      return state.map((student) => {
        if (student._id === payload._id) {
          return Object.assign({}, payload)
        }
        return student
      })

    case STUDENT_REMOVED :
      return state.filter((student) => (student._id !== payload._id))

    default :
      return state
  }
}
