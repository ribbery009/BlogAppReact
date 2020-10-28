import React, { Component } from 'react';
import axios from 'axios';
import './FullPost.css';

class FullPost extends Component {

    state = {
        loadedPost: null
    }
    componentDidUpdate(){
        console.log("[Fullp]-componentDidupdate");
        if(this.props.id)
        {
        console.log("[Fullp]-componentDidupdate-props.id");
        if(!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id))
        {
            console.log("[Fullp]-componentDidupdate-!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id");
            axios.get('https://jsonplaceholder.typicode.com/posts/'+this.props.id).then(response => 
            {
            this.setState({loadedPost: response.data})
            });

        }
    }
    }
    
    render () {
        console.log("[FullPost]-render");
        let post = <p style={{textAlign:'center'}}>Please select a Post!</p>;
        if(this.props.id){
            console.log("[FullPost]-render-this.props.id");
            post=<p style={{textAlign:'center'}}>Loading...</p>;
        }
        if(this.state.loadedPost){
            console.log("[FullPost]-render-this.state.loadedpost");
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button className="Delete">Delete</button>
                    </div>
                </div>
    
            );
            
        }
        return post;
    }
}

export default FullPost;