'use client'

import { useEffect, useState } from 'react';
import {Htag, Btn, P, Tag, Rating} from './components/index'

import { MenuItem } from './interfaces/menu.interface';

export default function Home() {
  const [rating, setRating] = useState<number>(1);
  const [menu, setMenu] = useState<MenuItem[]>([]);

  useEffect(()=>{
    async function loadData() {
      const data = await fetchData();
      setMenu(data);
    }
    loadData();
  },[]);


  return (
      <>
        <Htag tag="h1">Text</Htag>

        {/* Buttons */}
        <Btn appearence='primary' arrow='right'>Start</Btn>
        <Btn appearence='ghost' arrow='down'>Learn more</Btn>
        
        {/* Paragraphs */}
        <P size='s'>Small</P> 
        <P>Medium</P> 
        <P size='l'>Huge</P> 

        {/* Tags */}
        <Tag>Text</Tag>
        <Tag color='green'>Text</Tag>
        <Tag color='red'>Text</Tag>
        <Tag color='grey' href='https://www.youtube.com/'>Text</Tag>
        <Tag color='primary'>Text</Tag>
        <Rating rating={rating} setRating={setRating} isEditable />
        {
          menu.map(m => (<li key={m._id.secondCategory}>{m._id.secondCategory}</li>))
        }
      </>
  );
}

export const fetchData = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    method: "POST",
    headers:{
      "Content-Type" : "application/json"
    },
    body: JSON.stringify({firstCategory: 0}),
    cache: "force-cache"
  });
  const menu = await res.json();
  return menu
}