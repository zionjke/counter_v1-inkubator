import React from 'react';

type Props = {
    value:number
    finishValue: number
};
export const Counter: React.FC<Props> = ({value,finishValue}) => {
    return (
        <div className='counter'>
            <span className={`${value === finishValue && 'finishValue'}`}>{value}</span>
        </div>
    );
};
