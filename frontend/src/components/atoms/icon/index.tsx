import React from 'react';
import filledStar from '../../../../public/assets/images/filledVector.svg';
import outlinedStar from '../../../../public/assets/images/outlinedVector.svg';
interface IconProp {
    checked: boolean;
}
export const Icon = ({ checked }: IconProp) => {
    return (
        <>
            {checked ? (
                <img src={filledStar} alt="selected star" />
            ) : (
                <img src={outlinedStar} alt="unSelected star" />
            )}
        </>
    );
};
