import React from 'react';
import userImg from '../assets/timi.jpg';
import shareIcon from '../assets/share-icon.svg';
import ellipsisIcon from '../assets/ellipsis-icon.svg';


export default function ProfileHeader(){
    return(
        <div className='profile-wrapper'>
            <img  className='user-icon' src={userImg} id='profile__img' alt="Col.Mustard" />
            <div className='user-name' id='slack'> Col.Mustard </div>
            <div className='share-icon'>
                <picture >
                    <source 
                    srcSet={ellipsisIcon}
                    media='(max-width:780px)' />
                <img src={shareIcon} alt="Share Icon" />
                </picture>
            </div>
        </div>
    )
}