import React from 'react';
import SHOP_DATA from './export_data';
import Previewcomp from '../../Comman-Component/preview-collection-component/preview.compo';
class Shoppage extends React.Component{
    constructor(){
        super();
        this.state={
            collection:SHOP_DATA
        };
   }
   render(){
       const {collection}=this.state;
       return(
           <div className="">
           <h1>Collection</h1>
           {
               collection.map(item=>(<Previewcomp key={item.id} title={item.title} items={item.items}/>))
           }
           </div>
       );
   }
}


export default Shoppage;