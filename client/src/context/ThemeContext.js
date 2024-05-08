import { useState, createContext ,useContext} from 'react';

const ThemeContext = createContext();

const ThemeProvider =({children})=>{
const[theme,setTheme]=useState('light');

return(
<ThemeContext.Provider value={[theme,setTheme]}>
    {children}
</ThemeContext.Provider>
);
}


// exporting custom hoot
const useTheme=()=>useContext(ThemeContext);

export {useTheme,ThemeProvider};