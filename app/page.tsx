'use client'

// Hooks
import { useContext, useState, useEffect } from 'react'; 

// Components
import Image from 'next/image';
import { Typewriter } from '@/components/index';

// Fonts
import { robotoMono, oswald, quicksand } from '@/fonts/fonts'

// Dependencies
import cn from 'classnames';

// Context
import { AppContext } from '@/app/context/app.context';

export default function Home() {
  const [ textValue, setTextValue ] = useState<string>('python');
  const { menu } = useContext(AppContext);

  useEffect(() => {
    if (!menu || menu.length === 0) return;
  
    const categories = menu.flatMap(m => m.pages.map(p => p.category));
    let i = 0;
  
    const interval = setInterval(() => {
      setTextValue(categories[i]);
      i = (i + 1) % categories.length;
    }, 5000);
  
    return () => clearInterval(interval);
  }, [menu]);

  return (
      <div className='flex justify-center pt-20 h-full max-[765px]:h-[650px]'>
          <div className='flex flex-col gap-8 items-center'>
            <Image className='rounded-3xl' src='/skill-aggregator-logo.png' alt='#logo' width={200} height={100}/>
            <div>
              <h1 className={ cn( 'text-5xl text-center pt-5 mb-4 text-[var(--black)]', oswald.className ) } > Welcome to the Skill Aggregator</h1>
              <h1 className={ cn( 'text-3xl text-center text-[var(--grey-dark)', quicksand.className ) }> 
                Find an appropriate course for <Typewriter className={ cn( robotoMono.className, 'font-bold text-[var(--primary)]' ) } delay={100} text={textValue}  />
              </h1>
            </div>
            
          </div>
      </div>
  );
};