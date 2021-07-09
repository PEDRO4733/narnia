import React from 'react';

const BorderColor = ["","border-light-blue"];
const FocusBorderColor = ["focus:border-none","focus:border-light-blue"];
const Rounded = ["rounded-lg","rounded-sm","rounded"];
const Padding = ["","py-1","p-1"];
const Spacing = ["","px-4","px-1","px-2"];
const FocusBg = ["","focus:bg-dark-gray"];
const Size = ["","w-2 h-1","h-4 w-4"];
const Display = ["block","inline",""];

export const Input = ({
    type,
    value,
    onChange,
    name,
    className,
    placeholder,
    inputBorderColor,
    inputFocusBorderColor,
    inputRounded,
    inputPadding,
    inputSpacing,
    inputFocusBg,
    inputSize,
    inputDisplay
}) => {
    const checkInputBorderColor = BorderColor.includes(inputBorderColor) ? inputBorderColor : BorderColor[0];

    const checkInputFocusBorderColor = FocusBorderColor.includes(inputFocusBorderColor) ? inputFocusBorderColor : FocusBorderColor[0];

    const checkInputRounded = Rounded.includes(inputRounded) ? inputRounded : Rounded[0];

    const checkInputPadding = Padding.includes(inputPadding) ? inputPadding : Padding[0];
    
    const checkInputSpacing = Spacing.includes(inputSpacing) ? inputSpacing : Spacing[0];

    const checkInputFocusBg = FocusBg.includes(inputFocusBg) ? inputFocusBg : FocusBg[0];

    const checkInputSize = Size.includes(inputSize) ? inputSize : Size[0];

    const checkInputDisplay = Display.includes(inputDisplay) ? inputDisplay : Display[0];

    return(
        <input type = {type} value = {value} onChange = {onChange} name = {name} placeholder = {placeholder} className = {`${checkInputDisplay} ${checkInputSize} ${checkInputBorderColor} ${checkInputRounded} ${checkInputPadding} ${checkInputSpacing} m-3 max-w-full text-dark-gray border-opacity-75 focus:border-opacity-30 ${checkInputFocusBg} ${checkInputFocusBorderColor}`}/>
    );
};