import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import PostList from '../components/PostList'
import { createPost, editPost } from '../redux/actions'


const mapStateToProps = (state, props) => {
  return { posts: state.posts }
}

const mapDispatchToProps = (dispatch, props) =>
  bindActionCreators({ createPost, editPost }, dispatch)

const ConnectedPostList = connect(mapStateToProps, mapDispatchToProps)(PostList)

export default ConnectedPostList