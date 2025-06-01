import {useSyncExternalStore} from 'react'
export const useStorage = (key: string, initialValue: any) => {
    const updageStorage = (value:any)=>{
        localStorage.setItem(key, JSON.stringify(value))
        
    };
    const getSnapshot = ()=>{}
    const res = useSyncExternalStore(onStoreageChange,getSnapshot)  
    return[res,]
}