import { useEffect } from "react";

export default function useEscapeKey(handler){
    useEffect(()=>{
        function handleKeyPress(evt){
            if(evt.code === 'Escape'){
                handler(evt)
            }
        }
        window.addEventListener('keydown',handleKeyPress);
        return ()=>{
            window.removeEventListener('keydown', handleKeyPress);
        }
    },[handler])
}
