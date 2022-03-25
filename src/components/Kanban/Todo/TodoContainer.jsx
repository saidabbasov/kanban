import {connect} from "react-redux";
import Todo from './Todo';

const mapStateToProps = (state) => {
    return {
        task: state.todo.task
    }
}

const MyPostsContainer = connect(mapStateToProps)(Todo);

export default MyPostsContainer;