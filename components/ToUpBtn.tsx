// Components
import { Btn } from '@/components/index';

export const ToUpBtn = ()=> {

    const scrollTo = ()=> {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return(
        <Btn 
            appearence='primary'
            size='large'
            arrow='up'
            className='fixed right-5 bottom-10 gap-5'
            onClick={scrollTo}
        />
    );
};