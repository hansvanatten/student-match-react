// src/students/StudentItem.js
import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import './StudentItem.sass'

export class StudentItem extends PureComponent {
  static propTypes = {
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,

  }

  render() {
    const { _id, title, photo, } = this.props

    return(
      <article className="student">
        <header>
          <div className="cover" style={{ backgroundImage: `url(${photo})` }} />
          <h1>
            <Link to={`/student/${_id}`}>{ title }</Link>
          </h1>
        </header>
        <main>
        </main>
        <footer>
        </footer>
      </article>
    )
  }
}

const mapStateToProps = ({ currentUser }, { match }) => {
  return {
    currentUser,
    liked: likedBy.filter((like) => (match === (currentUser && currentUser._id))).length > 0
  }
}

export default connect(mapStateToProps)(StudentItem)
