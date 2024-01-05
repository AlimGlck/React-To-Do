import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Destroy from './Destroy';
import './style.css'
function Section({listItems,setListItems,copyListItems,setCheckAllBox,checkAllBox}) {
	
	
	
	
	//Bu fonksiyon ile maddelerin check edilme durumlarını değiştiriyoruz yani eğer check edilmişse check edilmemiş haline check edilmemişse check edilmiş haline dönüyor.
	let onCheck = (selectedItem) => {
		
		
		let updatedList = listItems.map((item) =>{
			if(item.id ==selectedItem.target.id){
				return{
					...item,
					isChecked:!item.isChecked
					
				}
			}
			return item
		})
		const x = updatedList.some(function(item){
			return item.isChecked ==false;
		})
		
		setListItems([...updatedList])

		if(x){
			setCheckAllBox(false)
		}
		else{
			setCheckAllBox(true)
		}
		

		
	}
	//Burada tüm maddelerin aynı anda check edilmesini sağlayan butonu çalıştırıyoruz
	let CheckedAll = (checkAllCheckBox) =>{
		if(checkAllCheckBox.target.checked){
			let updatedList = listItems.map((item) => {
				return{
					...item,
					isChecked:true
				}
				
			})
			const x = updatedList.some(function(item){
				return item.isChecked ==false;
			})
			setListItems([...updatedList])
			if(!x){
				setCheckAllBox(true)
			}
		}
		else{
			let updatedList = listItems.map((item) => {
				return{
					...item,
					isChecked:false
				}
				
			})
			const x = updatedList.some(function(item){
				return item.isChecked ==false;
			})
			setListItems([...updatedList])
			if(x){
				setCheckAllBox(false)
			}

		}
		
	}
	

	
	

	var Checked = (item) => item.isChecked ? "completed":""
	let y = listItems.length ? true:false
	 
	
	return (
    <section className = "main">
		<input checked={checkAllBox} className = "toggle-all" type = "checkbox" id='toggle-all' onChange={CheckedAll}/>
		<label htmlFor = "toggle-all" hidden={!y}>
		
		</label>
		<ul className = "todo-list">
			
			{   copyListItems.map((item) =>
				<li key={item.id} className={Checked(item)}>
				<div className="view" >
					<input checked={item.isChecked}  className="toggle" type="checkbox"  id={item.id} onChange={onCheck}/>
					<label>{item.text}</label>
					<Destroy listItems={listItems} setListItems={setListItems} item={item.id}/> 
				</div>
			</li>) 
			
			}
			
	</ul>
	</section>
  )
}
export default Section;
