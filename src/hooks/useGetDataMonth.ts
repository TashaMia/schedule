import { useEffect, useState } from 'react'

type dataRange = {
    [index: string]: { [index: string]: number }
}

export default function useGetDataMonth({ filter }: { filter: string }) {
    const [data, setData] = useState()

    async function getData() {
        const res = await fetch(
            'https://64f1a1ad0e1e60602d240c59.mockapi.io/periods/graph'
        )

        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }

        let data = await res.json()

        const filteredData = data
            .map((i: dataRange) => {
                const splitFilter = filter.split('/').pop()
                if (Object.keys(i)[0] !== splitFilter) return
                return i[splitFilter]
            })
            .filter((x: { [index: string]: number }) => !!x)
        setData(filteredData[0])
    }

    useEffect(() => {
        getData()
    }, [])

    return data
}
