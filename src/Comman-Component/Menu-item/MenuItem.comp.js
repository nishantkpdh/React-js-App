import React from 'react';
import './Menuitem.style.scss';
import {withRouter as Router} from 'react-router-dom';

const MenuItem=({title,image,size,history,linkUrl,match})=>(
    <div className={`${size} menu-item`} onClick={()=>{history.push(`${match.url}${linkUrl}`)}}>
        <div className="background-image" style={{backgroundImage:`url(${image})`}} >
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">Shop Now</span>
            </div>
        </div>
    </div>
);
export default Router(MenuItem);