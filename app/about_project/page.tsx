'use client'

// Dependencies
import cn from 'classnames';
import parser from 'html-react-parser';

// Components
import Image from 'next/image';
import { Htag, P, Card } from '@/components/index';

// Styles
import styles from './about.module.scss';

// Fonts
import { robotoMono, oswald, quicksand } from '@/fonts/fonts';

// Data
import links from './json/links.json';
import paragraphes from './json/paragraphes.json';
import myInfo from './json/myInfo.json'

// Hooks
import { useRouter } from 'next/navigation';

export default function Page (){

    const Router = useRouter();

    return (
        <div className={styles.wrapper}>
            {/* "About the project column"  */}
            <div className='flex flex-col gap-14'>
                    <h1 className={ cn( 'text-5xl text-center pt-10', oswald.className ) }>About the project</h1>

                    <ul className='flex flex-col gap-16'>
                    {
                        paragraphes.map( p => (
                            <li className='flex flex-col gap-6 w-fit' key={p.key}>
                                <Htag tag='h1' className={ cn(robotoMono.className, 'text-[var(--primary)]') }> {p.title}</Htag>

                                <P size='l' className={ cn( 'pl-2', quicksand.className ) }>{parser(p.text)}</P>
                            </li>
                        ) )
                    }
                    </ul>
            </div>
            {/* "About the author" column */}
            <Card className={ cn( 'flex flex-col gap-6 items-center p-2 pb-4 mt-16 bg-[var(--wk-blue-light)] rounded-md h-fit', styles.creatorPage ) }>
                {/* wikipedia styled Heading tag */}
                <Htag className='bg-[var(--wk-dark-blue)] w-full text-center' tag='h3'>Creator</Htag>

                {/* Creator's image/logo */}
                <Image className='rounded-3xl' src='/skill-aggregator-logo.png' alt='#creator' width={250} height={250} />

                <div className='flex flex-col self-start gap-4'>
                    {/* Info about me */}
                    {
                        myInfo.map( info => (
                            <div key={info.type} className={styles.wikiGrid}>
                                <P size='s' className='font-bold'>{parser(info.type)}</P>
                                <P size='s'>{parser(info.value)}</P>
                            </div>
                        ) )
                    }

                    {/* Links to social medias */}
                    <div className={styles.wikiGrid}>
                        <P size='s' className='font-bold'>Links</P>
                        <ul className='flex flex-col gap-2 items-start border-3'>
                            {
                                links.map( link => (
                                    <div key={link.title} className='flex gap-2 justify-center cursor-pointer hover:text-[var(--primary)] transition-all duration-200'>
                                        <Image src={link.img} alt='#logo' width={23} height={20}/>
                                        <li onClick={()=> Router.push(link.link)}>{link.title}</li>
                                    </div>
                                    
                                ) )
                            }
                        </ul>
                    </div>

                </div>    
                
            </Card>
        </div>
    );
};