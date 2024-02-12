import { useEffect, useState } from "react";

export default function useMediaQuery(mediaQuery: string){
  
  const [query,_]= useState<string>(mediaQuery)
  const [matches,setMatches]= useState(false)

  useEffect(()=>{
    if(!mediaQuery) return

    const handleChange = (queryList: MediaQueryListEvent) => {
      setMatches(queryList.matches);
    };

    const queryList = window.matchMedia(query);

    setMatches(queryList.matches);

    try {
      queryList.addEventListener("change", handleChange);
    } catch {
      queryList.addListener(handleChange);
    }
    return()=>{
      try{
        queryList.removeEventListener("change",handleChange)
      }catch{
        queryList.removeListener(handleChange)
      }
    }
  },[mediaQuery])
  return matches
}