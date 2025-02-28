import {Htag, Btn, P, Tag} from './components/index'

export default function Home() {
  return (
    <div>
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
    </div>
  );
}
