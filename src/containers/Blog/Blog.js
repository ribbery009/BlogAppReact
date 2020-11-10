import React, { Component } from 'react';
import Posts from '../Blog/Posts/Posts';
//import axios from '../../axios';
import {Route,NavLink,Switch} from 'react-router-dom';
import './Blog.css';
//import NewPost from '../Blog/NewPost/NewPost';
import asyncComponent from '../../hoc/asyncComponent';


const AsyncNewPost = asyncComponent(()=> {
    console.log("AssynNewPost");
return import('../Blog/NewPost/NewPost');
});

class Blog extends Component {
    state = {
    auth: true
    }

    render () {
        console.log("[Blog.js-render..]")
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/posts/"
                            activeClassName="my-active" activeStyle={{
                                color: '#fa923f',
                                textDecoration: 'underline'
                            }}>Posts</NavLink></li>
                            <li><NavLink to={{pathname: '/new-post',
                        hash: '#submit',
                        search: '?quick-submit=true'}}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/*<Route path="/" exact render={() => <h1>Home</h1>}/>
                <Route path="/" render={() => <h1>Home</h1>}/>*/}
                
                <Switch>
                {this.state.auth ? <Route path="/new-post" component={AsyncNewPost}/> : null}
                <Route  path="/posts"  component={Posts}/>
                <Route render={() => <h1>Not found!</h1>}/>
                {/*<Redirect from="/" to="/posts"/>*/}
                </Switch>
            </div>
        );
    }
}

export default Blog;