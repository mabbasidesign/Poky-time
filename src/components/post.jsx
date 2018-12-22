import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
import { deletePost } from '../action/postAction'

class Post extends Component {   

    // state = {
    //     post: null
    // }

    // componentDidMount () {
    //     // console.log(this.props);
    //     let id = this.props.match.params.post_id;
    //     axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
    //     .then(res => {
    //         this.setState({
    //             post: res.data
    //         })
    //         console.log(res);
    //     });
    // }


    handleDelete = () => {
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/');
    }
   

    render() {
    console.log('mohsen post', this.props)
    const post = this.props.post ?
    (
        <div className="post">
            <h4 className="">{this.props.post.title}</h4>
            <p>{this.props.post.body}</p>
            <button className="btn gray" onClick={this.handleDelete}> Delete </button>
        </div>
    ):
    (
        <div className="center"> Loading post ... </div>
    );

        return ( 
            <div className="container">
                { post }
            </div>
         );
    }
}


const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.post_id;
    return {
        post: state.posts.find( (p) => {
            return p.id === id;
        })
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // deletePost: (id) => {dispatch ({ type: 'DELETE_POST', id: id }) }
        deletePost: (id) => {dispatch (deletePost(id)) }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Post);
