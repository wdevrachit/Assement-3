import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

const Layout=()=>{
    const theme= useContext(ThemeContext)
return (
    <div style={theme}>
        <p>{JSON.stringify(theme)}</p>
    </div>

)

};



export default Layout;
