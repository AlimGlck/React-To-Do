import React, { useEffect } from 'react'
import { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Section from './Section';
import './style.css'

function Main() {
  //Submit Edilen Maddelerin Gittiği İlk Liste
  const [listItems,setListItems] =useState([]);
  //Aynı Maddelerin Kopyalandığı Liste
  const [copyListItems,setCopyListItems] = useState([]);
  //Selected Class'ının Belirlenmesini Sağlayan 3 Adet Use-State
  let [All,setAll] = useState("selected");
  let [Complete,setComplete] = useState("");
  let [Active,setActive] = useState("");
  //Maddelerin Check Edilmesini Kontrol Eden Use-State
  const[checkAllBox,setCheckAllBox] =useState(false)

  

  

  return (  
    <section className='todoapp'>
      <Header setListItems={setListItems} listItems ={listItems} setCopyListItems={setCopyListItems} All={All} Complete={Complete} Active={Active}  />
      
      <Section listItems={listItems} setListItems={setListItems} copyListItems={copyListItems} checkAllBox={checkAllBox} setCheckAllBox={setCheckAllBox} />
      
      <Footer listItems={listItems} setListItems={setListItems} setCopyListItems={setCopyListItems} All={All} Complete={Complete} Active={Active} setAll={setAll} setComplete={setComplete} setActive={setActive} setCheckAllBox={setCheckAllBox}/>
    </section>
  )
}
export default Main;
