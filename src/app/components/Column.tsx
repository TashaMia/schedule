'use client'
import { useEffect, useState } from 'react'

export default function Column(props: { data: number }) {
    const [height, setHeight] = useState<number>(0)
    const val = props.data
    const blocks = [
        { startsWith: 0, endsWith: 500 },
        { startsWith: 500, endsWith: 1000 },
        { startsWith: 1000, endsWith: 2000 },
        { startsWith: 2000, endsWith: 5000 },
        { startsWith: 5000, endsWith: 10000 },
    ]
    const arrayOfPixels = blocks.map((block, index) => {
        if (block.startsWith > val) return 0
        const height = countHeight({
            val,
            difference: block.endsWith - block.startsWith,
        })
        console.log({ [index]: height })
        return height
    })

    function countHeight({
        val,
        difference,
    }: {
        val: number
        difference: number
    }) {
        const percentage = val > difference ? 100 : (val * 100) / difference
        const height = (50 * percentage) / 100
        return height
    }
    useEffect(() => {
        const height = arrayOfPixels.reduce((a, b) => a + b)
        setHeight(height - 28)
    }, [arrayOfPixels])

    const [visiblePrice, setVisiblePrice] = useState(false)

    return (
        <div className="flex flex-col  relative items-center  ">
            <div
                className={` ${
                    visiblePrice
                        ? 'inlive bg-green  inline absolute text-base rounded-[6px]  px-2'
                        : 'hidden'
                }
                  `}
            >
                {props.data}
            </div>
            <div
                className={`
                ${height && height > 150 && 'animate-columnUpMax '} 
                ${
                    height && height < 90 && 'animate-columnUpMin '
                }  ' w-4 mt-8 rounded-[4px]  bg-blue hover:shadow-columnShadow '`}
                style={{ height: height }}
                onMouseEnter={() => setVisiblePrice(true)}
                onMouseLeave={() => setVisiblePrice(false)}
            ></div>
        </div>
    )
}
