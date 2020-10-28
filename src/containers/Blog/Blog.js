import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import axios from 'axios';
import post from '../../components/Post/Post';

class Blog extends Component {
    state={
        posts: [],
        selectedPostsId: null
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts/')
        .then
        (response =>
        {
            const posts=response.data.slice(0, 4);
            const updatedPosts= posts.map(post => {
            
            return {
                ...post, author: 'Peter'
            }
            })
            this.setState({posts: updatedPosts});
        }
        );
        
    }
    
    postSelectHandler = (id) => {
this.setState({selectedPostsId: id});
    }
    render () {
const posts= this.state.posts.map(post =>
    {
        return 
        <Post key={post.id}
         title={post.title}
          author={post.author}
          clicked={() => this.postSelectHandler(post.id)}/>;
    })
        return (
            <div>
                <section className="Posts">
                   {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostsId}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;