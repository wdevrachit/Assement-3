import React from "react";
export const themes={
    dark:{
        color:'white',
        background:'#A653F5',
        padding:'5px'
    },
    light:{
        color:'black',
        background:'#F96CFF',
        padding:'5px'

    }
};

const ThemeContext=React.createContext(themes.dark)

export default ThemeContext;