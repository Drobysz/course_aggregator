import {Htag, Btn} from './components/index'

export default function Home() {
  return (
    <div>
      <Htag tag="h1">Text</Htag>
      <Btn appearence='primary' arrow='none'>Start</Btn>
      <Btn appearence='ghost' arrow='down'>Learn more</Btn>
    </div>
  );
}
