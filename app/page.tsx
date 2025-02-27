import {Htag, Btn, P} from './components/index'

export default function Home() {
  return (
    <div>
      <Htag tag="h1">Text</Htag>
      <Btn appearence='primary' arrow='right'>Start</Btn>
      <Btn appearence='ghost' arrow='down'>Learn more</Btn>
      <P size='s'>Small</P> 
      <P>Medium</P> 
      <P size='l'>Huge</P> 
    </div>
  );
}
