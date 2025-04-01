// Components
import { Card, VacancyRating } from "@/components/index";

// Style
import styles from './HhData.module.scss'

// Props
import { HhData } from "@/app/interfaces/page.interface"
import { FC } from "react"

// Functions
import { priceDecorator } from "@/app/helpers/usefulFuncs";

// Dependencies
import cn from 'classnames'

interface HHDataProps extends Partial<HhData>{
    className?: string;
};

export const HhDataComponent : FC<HHDataProps> = ({ className, count, juniorSalary, middleSalary, seniorSalary })=> {
    return (
        <div className={cn(className, styles.hh)}>
            <Card className={styles.count} color='white'>
                <div className={styles.title}>All Vacancies</div>
                <div className={styles.statCount}>{count}</div>
            </Card>

            <Card className={styles.statSalary}  color="white">
                <div className={styles.statBlock}>
                    <div className={styles.title}>Junior</div>
                    <div className={styles.salaryValue}>{priceDecorator(juniorSalary)} ₽</div>
                    <VacancyRating rating={1}/>
                </div>
                <div className={styles.statBlock}>
                    <div className={styles.title}>Middle</div>
                    <div className={styles.salaryValue}>{priceDecorator(middleSalary)} ₽</div>
                    <VacancyRating rating={2}/>
                </div>
                <div className={styles.statBlock}>
                    <div className={styles.title}>Senior</div>
                    <div className={styles.salaryValue}>{priceDecorator(seniorSalary)} ₽</div>
                    <VacancyRating rating={3}/>
                </div>
            </Card>
        </div>
    );
};