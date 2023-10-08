import { useEffect, useState } from "react"

interface Props {
    service: (params: any) => Promise<unknown>;
    params?: unknown
}

export const useFetch = ({service, params}:Props) => {
    const [data, setData] = useState<any>()
    const [ isLoading, setIsloading] = useState(true)

    useEffect(()=>{
        service(params).then(res=>{setData(res); setIsloading(false)})
    },[])

    return [data, isLoading]
}