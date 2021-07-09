import React from 'react';

export const Error = ({
    children,
    
}) => {
    return <p className = "subpixel-antialiased text-dark-red font-xs font-light">
        {children} 
    </p>
}