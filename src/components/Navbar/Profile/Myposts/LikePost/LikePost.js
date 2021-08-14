import React from 'react';
import like from '../../../../img/emblem.png';
import likeActive from '../../../../img/Vari.png';
import s from './LikePost.module.css';

const { Component } = require("react");


const LikePost = (props) => {
    
    if (props.isLike) {
        return <div className={s.emblem}>
            <img src={likeActive}></img>
        </div>
    }

    return <div className={s.emblem}>
        <img src={like}></img>
    </div>

}

export default LikePost;


