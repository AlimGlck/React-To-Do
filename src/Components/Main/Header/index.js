import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import './style.css'

function Header({setListItems,listItems,setCopyListItems,All,Active,Complete}) {
	//Eklenen Maddenin Listeye Eklenmeden Önce İlk Olarak Gittiği Use-State
	let [listItem,SetListItem] = useState({text:"",isChecked:false,id:1});

	//Text Inputun çalışmasını sağlayan kod 
	const listChange = (e) =>{
		SetListItem({...listItem,text:e.target.value});
	};
	//Submit işlemi
	const Submit = (e) => {
		//Sayfanın yinelenmesi önleniyor
		e.preventDefault();
		//Eğer input boş ise ekleme işleminin yapılmasına izin verilmiyor boş değilse " If " içine girip, madde, Main Component da yarattığımız listeye ekleniyor
		if(listItem.text !=""){
			setListItems([...listItems,listItem]);
		}

		//Ekleme yaptıktan sonra inputu temizliyor
		SetListItem({...listItem,text:""});
	}

	//List Itemsta her değişik olduğunda çalışacak kod, bu kod parçacığında her maddenin "id" propertysine silme ekleme işlemlerinden eklenmeyecek bir id atama işlemi yapıyoruz.
	useEffect(() =>{
		for (let index = 0; index <= listItems.length; index++) {
			SetListItem({...listItem,id:index});
			
		}
	},[listItems])


	//ListItem arrayinde bir değişiklik olduğu zaman canlı olarak itemlerin o sayfadan yer değişmesini sağlıyor. Yani Eğer Active tıklamışsak ve Active deyken bir maddenin check ettiysek onu güncelleyerek Active bölümünden yok ediyor.
	useEffect(() =>{
		if(All =="selected"){
			let All = listItems.filter(item => item);
			setCopyListItems([...All]);
		}
		
		if(Active == "selected"){
			let Active = listItems.filter(item =>item.isChecked === false);
			setCopyListItems([...Active]);
		}
		
		if(Complete == "selected"){
			let Complete = listItems.filter(item => item.isChecked === true);
			setCopyListItems([...Complete]);
		}
	},[listItems])


  return (
    <header className="header">
		<h1>todos</h1>
		<form onSubmit={Submit}>
			<input  className="new-todo" placeholder="What needs to be done?" value={listItem.text} autoFocus  onChange={listChange}  />
		</form>
	</header>
)}
export default Header;
