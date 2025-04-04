// Components
import { Htag, Tag } from "@/components/index";
import classNames from "classnames";

// Props
import { FC, ReactNode } from 'react';
import { Tagprops } from './Tag'

interface TagsSetProps extends Tagprops {
    tags: string[],
    className?: string,
    title?: string
    children?: ReactNode
};

export const TagsSet: FC<TagsSetProps> = ( {tags, className, title, ...props} )=> {
    return (
        <div className={classNames("flex flex-col gap-5", className)}>
            {title && <Htag tag="h2">{title}</Htag>}
            <div className="flex flex-wrap gap-2.5">
                {
                    tags?.map( tag => <Tag className="h-fit w-fit" key={tag} {...props}>{tag}</Tag> )
                }
            </div>
        </div>
    );
};