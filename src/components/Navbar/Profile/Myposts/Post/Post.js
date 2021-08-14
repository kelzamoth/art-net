import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <div  className={s.image}>
                <img src={props.img}></img>
            </div>
            <div className={s.text}>
                {props.message}
            </div>
            <div className={s.text}>
                {props.likeCount}
            </div>
        </div>
    )
}

export default Post;