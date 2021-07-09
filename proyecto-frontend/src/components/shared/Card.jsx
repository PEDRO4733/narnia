import React from 'react';

const Columns = ["","grid grid-cols-2"];
const Width = ["","w-2/4"];
const Height = ["h-auto",""];

export const Card = ({
    children,
    cardColumns,
    cardWidth,
    cardHeight
}) => {

    const checkCardColumns = Columns.includes(cardColumns) ? cardColumns : Columns[0];

    const checkCardWidth = Width.includes(cardWidth) ? cardWidth : Width[0];

    const checkCardHeight = Height.includes(cardHeight) ? cardHeight : Height[0];

    return (
        <main className = {`${checkCardColumns} ${checkCardHeight} ${checkCardWidth} relative mt-5 rounded-lg shadow-2xl`}>
            {children}
        </main>
    );
};