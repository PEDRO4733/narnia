import React from 'react';

const BgColor = ["bg-white","bg-red-600","bg-none"];
const FocusRingColor = ["focus:ring-red-500","focus:ring-indigo-500"];
const TextColor = ["text-white","text-gray-700"];
const HoverColor = ["hover:bg-gray-50","hover:bg-red-700"];
const Border = ["border border-gray-300"," border border-transparent"];

export const Button = ({
    children,
    type,
    onClick,
    value,
    name,
    buttonBgColor,
    buttonFocusRingColor,
    buttonTextColor,
    buttonBorder,
    buttonHoverColor
}) => {
    const checkButtonBgColor = BgColor.includes(buttonBgColor) ? buttonBgColor : BgColor[0];

    const checkButtonFocusRingColor = FocusRingColor.includes(buttonFocusRingColor) ? buttonFocusRingColor : FocusRingColor[0];

    const checkButtonTextColor = TextColor.includes(buttonTextColor) ? buttonTextColor : TextColor[0];
    
    const checkButtonBorder = Border.includes(buttonBorder) ? buttonBorder : Border[0];

    const checkHoverColor = HoverColor.includes(buttonHoverColor) ? buttonHoverColor : HoverColor[0];

    return (
        <button onClick = {onClick} type = {type} value = {value} name = {name} className = {`${checkHoverColor} ${checkButtonBorder} ${checkButtonBgColor} ${checkButtonFocusRingColor} ${checkButtonTextColor} w-full inline-flex justify-center rounded-md shadow-sm px-4 py-2 font-medium focus:ring-2 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm`}>
            {children}
        </button>
    );
};