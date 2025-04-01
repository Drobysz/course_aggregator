// Components
import { Htag, Tag } from "@/components/index";
import classNames from "classnames";

// Props
import { FC } from 'react';

export const TagsSet: FC<Partial<{tags: string[], className: string}>> = ( {tags, className} )=> {
    return (
        <div className={classNames("flex flex-col gap-5", className)}>
            <Htag tag="h2">Acquiring skills</Htag>
            <div className="flex flex-wrap gap-2.5">
                {
                    tags?.map( tag => <Tag className="h-fit w-fit" key={tag} size="m" color="primary">{tag}</Tag> )
                }
            </div>
        </div>
    );
};