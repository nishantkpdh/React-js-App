import React from 'react';
import './preview.style.scss'
import Itemcomp from '../preview-item-component/item-compo';
const Previewcomp=({title,items})=>(
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
         {items.filter((item,inx) => inx < 4).map(item => (
             <Itemcomp id={item.id} name={item.name} imageUrl={item.imageUrl} price={item.price}/>
            ))}
        </div>
    </div>
);

export default Previewcomp;