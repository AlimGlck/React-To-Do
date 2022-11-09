import React from 'react'
import './style.css'

function Destroy({listItems,setListItems,item}) {

   let deleteItem = () => {
        let updatedListx = [...listItems];
        const objectWithIndex =updatedListx.findIndex((obj) => obj.id == item);
        updatedListx.splice(objectWithIndex,1);
        setListItems([...updatedListx]);
    }


  return (
    <>
      <button className="destroy" onClick={deleteItem}></button>
    </>
  )
}

export default Destroy;
