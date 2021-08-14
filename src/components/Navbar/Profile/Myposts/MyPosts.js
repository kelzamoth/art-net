import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    const postElements = props.profilePage.posts.map(post => <Post img={post.img} message={post.message} likeCount={post.likeCount} />);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch({ type: 'ADD-POST' });
    };

    let newPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch({ type: 'UPP-NEW-POST-TEXT', newText: text });
    };

    return (
        <div className={s.content}>
            <div><h3>My posts</h3>
                <div>
                    <div>
                        <textarea ref={newPostElement} value={props.profilePage.newPostText} onChange={newPostChange} />
                    </div>
                    <div onClick={addPost}>
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