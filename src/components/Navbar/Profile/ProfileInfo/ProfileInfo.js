import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../../common/Preloader";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div className={s.head} />
            <div>
                <img src={props.profile.photos.small}/>
                <div>{props.profile.fullName}</div>
                <div>{props.profile.aboutMe}</div>
                <div>{props.profile.contacts.vk}</div>

            </div>

            <div className={s.item} />
        </div>
    )
}

export default ProfileInfo;