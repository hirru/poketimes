import React, { Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'



class Home extends Component{
    
    render(){
        const {posts} = this.props;
        const postsList = posts.length ? (
            posts.map(post=>{
                return(
                    <div className="post card" key={post.id}>
                        <div className="card-content">
                            <Link to={'/'+post.id}><span className="card-title">
                                {post.title}
                            </span></Link>
                            <p>
                                {post.body}
                            </p>
                        </div>
                    </div>
                )
            })
        ) : ( <div className="center">No posts</div>  )
        return(
            <div className="container home">
                <div className="center">
                    <h3>Home</h3>
                </div>
                {postsList}
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        posts:state.posts
    }
}

export default connect(mapStateToProps)(Home);