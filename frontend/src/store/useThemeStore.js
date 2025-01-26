import {create} from "zustand";

export const useThemestore = create((set)=>({
    theme: localStorage.getItem("chat-theme") || "halloween",
    setTheme: (theme) =>{
        localStorage.setItem("chat-theme",theme);
        set({theme});}
}));