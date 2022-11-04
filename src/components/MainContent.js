import React from 'react';
import LinksSection from './LinksSection';
import LinksData from '../LinksData'
import ProfileHeader from './ProfileHeader';
import BodyFootnote from './BodyFootnote';


export default function MainContent (){
    const linkElements =  LinksData.map( linkItem =>{
        return <LinksSection
        id={linkItem.id}
        href={linkItem.href}
        text={linkItem.linkName}
        altText={linkItem.altText}
        />
    })
    return(
            <div className='main-content'>
                <ProfileHeader/>
               <div className='links-section-wrapper'>
               {linkElements}
               </div> 
               <BodyFootnote/>
            </div>
    )

}