 import {create} from 'zustand';

export const useThemeStore = create((set) => ({
    theme: localStorage.getItem("Conexon-theme")||'coffee',
    setTheme: (theme)=> {
        localStorage.setItem("Conexon-theme", theme);
        set({theme})
    }
 }))