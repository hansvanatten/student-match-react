// // src/actions/students/fetch.js
// import API from '../../middleware/api'
// import loadError from '../load/error'
// import loadSuccess from '../load/success'
// import loading from '../loading'
// export const FETCHED_STUDENTS = 'FETCHED_STUDENTS'
//
// const api = new API()
// const students = api.service('students')
//
// export default () => {
//   return (dispatch) => {
//     dispatch(loading(true))
//
//     students.find({
//       query: {
//         $limit: 25
//       }
//     })
//     .then((response) => {
//       dispatch(loadSuccess())
//       dispatch({
//         type: FETCHED_STUDENTS,
//         payload: response.data
//       })
//     })
//     .catch((error) => {
//       dispatch(loadError(error))
//     })
//     .then(() => {
//       dispatch(loading(false))
//     })
//   }
// }
