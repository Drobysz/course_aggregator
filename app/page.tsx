'use client'

import { useState } from 'react';
import {Htag, Btn, P, Tag, Rating} from './components/index'

export default function Home() {
  const [rating, setRating] = useState<number>(1);

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
      </>
  );
};