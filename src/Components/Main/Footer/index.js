import React from 'react'
import { useState } from 'react';
import './style.css'

function Footer({listItems,setCopyListItems,All,Complete,Active,setAll,setActive,setComplete,setListItems,setCheckAllBox}) {
  
	// Bu fonksiyon ile All a geçiş yapılıp tüm maddelerin görünlülenmesini sağlıyoruz
	let ClickAll = () =>{

		setAll("selected");
		setComplete("");
		setActive("");
		
		let All = listItems.filter(item => item);
		setCopyListItems([...All]);

	}
	// Bu fonksiyon ile Active e geçiş yapılıp check edilmemiş maddelerin görünlülenmesini sağlıyoruz
	let ClickActive = () => {

		setAll("");
		setComplete("");
		setActive("selected");
		
		let Active = listItems.filter(item => item.isChecked === false);
		setCopyListItems([...Active]);

	}
	// Bu fonksiyon ile Complete e geçiş yapılıp check edilmiş maddelerin görünlülenmesini sağlıyoruz
	let ClickComplete = () => {

		setAll("");
		setComplete("selected");
		setActive("");
		
		let Complete = listItems.filter(item => item.isChecked === true);
		setCopyListItems([...Complete]);
	}
	
	let x = listItems.filter(item => item.isChecked === false);
	let y = listItems.length ? true:false;
	let z = listItems.filter(item => item.isChecked === true);
	let f = z.length ? true:false;

	//Bu fonksiyon ile checklenmiş tüm maddeleri "Clear Completed" e tıklayarak siliyoruz
	let deleteCheckedItems = () => {
		let updatedListy = [...listItems];
		let Items =	updatedListy.filter(item => item.isChecked === false );
		setListItems([...Items]);

		if(!Items.length){
			setCheckAllBox(false);
		}
		
	}


	

	
	
	return (
		
    <footer className="footer" hidden={!y}>
		<span className="todo-count">
			<strong> {x.length} </strong>
			items left
		</span>

		

		<ul className="filters">
			<li>
				<a href="#/" onClick={ClickAll} className={All} >All</a>
			</li>
			<li>
				<a href="#/" onClick={ClickActive} className={Active}>Active</a>
			</li>
			<li>
				<a href="#/" onClick={ClickComplete} className={Complete} >Completed</a>
			</li>
		</ul>
		

		<button className="clear-completed" hidden={!f} onClick={deleteCheckedItems}>
			Clear completed
		</button>
	</footer>
	
  )
}

export default Footer;
