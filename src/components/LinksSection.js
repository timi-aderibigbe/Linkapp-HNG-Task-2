import React from 'react';
// import { Link } from 'react-router-dom';


export default function LinksSection(prop){
    return(
            <a className='link-item' href={prop.href} id={prop.id} alt={prop.altText}>
                        {/* <Link className='link-item' to={prop.href}> */}
                             {prop.text} 
                              {/* </Link> */}
            </a>
            // {<Link className='link-item' to={prop.href}></Link>}
    )
}