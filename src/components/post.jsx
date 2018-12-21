import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';

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

    render() {
    console.log(this.props)
    const post = this.props.post ?
    (
        <div className="post">
            <h4 className="center">{this.props.post.title}</h4>
            <p>{this.props.post.body}</p>
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

// const mapStateToProps = (state, ownProps) => {
//     const id = ownProps.match.params.post_id;
//     return {
//         post: state.posts.find( (p) => {
//             return p.id === id;
//         })
//     }
// }

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id;
    return {
        post: state.posts.find((p) => {
            return p.id === id
        })
    }
}

export default connect(mapStateToProps)(Post);
