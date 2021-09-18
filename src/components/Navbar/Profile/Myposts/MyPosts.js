import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    const postElements = props.posts.map(post => <Post img={post.img} message={post.message} likeCount={post.likeCount} />);

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addNewPost();
    };

    let newPostChange = () => {
        let text = newPostElement.current.value;
        props.uppdateNewPostText(text);
    };

    return (
        <div className={s.content}>
            <div><h3>My posts</h3>
                <div>
                    <div>
                        <textarea ref={newPostElement} value={props.newPostText} onChange={newPostChange} />
                    </div>
                    <div onClick={ onAddPost }>
                        <button>Add post</button>
                    </div>
                </div>
                <div className={s.posts}>
                    {postElements}
                </div>
            </div>
        </div>
    )
}

export default MyPosts;