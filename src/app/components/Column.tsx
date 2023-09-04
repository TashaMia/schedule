'use client'
import useGetDataMonth from '@/hooks/useGetDataMonth'
import { SetStateAction } from 'jotai'
import { usePathname } from 'next/navigation'
import { Dispatch, useState } from 'react'

export default function Column(props: { data: number }) {
    let heightCount
    let pr = props.data

    let percent
    if (pr <= 500) {
        percent = (pr * 100) / 500
        heightCount = (70 * percent) / 100
    }
    if (pr > 500 && pr <= 1000) {
        percent = (pr * 100) / 500
        heightCount = (65 * percent) / 100
    }
    if (pr > 1000 && pr <= 2000) {
        percent = (pr * 100) / 2000
        heightCount = 100 + (60 * percent) / 100
    }

    if (pr > 2000 && pr <= 5000) {
        percent = (pr * 100) / 5000
        heightCount = 150 + (60 * percent) / 100
    }
    if (pr > 5000 && pr <= 10000) {
        percent = (pr * 100) / 10000
        heightCount = 190 + (60 * percent) / 100
    }
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
                ${heightCount && heightCount > 150 && 'animate-columnUpMax '} 
                ${
                    heightCount && heightCount < 90 && 'animate-columnUpMin '
                }  ' w-4 mt-8 rounded-[4px]  bg-blue hover:shadow-columnShadow '`}
                style={{ height: heightCount }}
                onMouseEnter={() => setVisiblePrice(true)}
                onMouseLeave={() => setVisiblePrice(false)}
            ></div>
        </div>
    )
}
