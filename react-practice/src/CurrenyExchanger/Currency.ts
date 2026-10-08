import { useEffect, useState } from "react";

export default function useCurrencyInfo(currency: string) {
    let [data, setData] = useState(null)
    // let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;
    useEffect(() => {
        let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json

`
        fetch(url).then((res) => res.json()).then((res) => setData(res[currency]))
    }, [currency])
    return data;
}

