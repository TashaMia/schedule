'use client'
import useGetDataMonth from '@/hooks/useGetDataMonth'
import { usePathname } from 'next/navigation'
import Column from './Column'
import { useEffect, useState } from 'react'

export default function Schedule() {
    const price = [10000, 5000, 2000, 1000, 500, 0]
    const monthOfHalfYear = ['Июнь', 'Июль', 'Авг', 'Окт', 'Нояб', 'Дек']
    const monthOfYear = [
        'Янв',
        'Фев',
        'Март',
        'Апр',
        'Май',
        'Июнь',
        'Июль',
        'Авг',
        'Окт',
        'Нояб',
        'Дек',
    ]
    const dayOfMonth = [
        '01',
        '',
        '',
        '',
        '05',
        '',
        '',
        '',
        '',
        '10',
        '',
        '',
        '',
        '',
        '15',
        '',
        '',
        '',
        '',
        '20',
        '',
        '',
        '',
        '',
        '25',
        '',
        '',
        '',
        '',
        '30',
    ]

    const path = usePathname()
    const data = useGetDataMonth({ filter: path })
    const arrayOfData: number[] = []

    let gap

    path == '/half_year' ? (gap = 'gap-6.0rem') : ''
    path == '/month' ? (gap = 'gap-2.0rem') : ''
    for (let key in data) {
        arrayOfData.push(data[key])
    }
    return (
        <div className="w-[995px] z-10 bg-pink/5 h-[400px] gap-6 flex  rounded-[27px] py-10 pl-10">
            <div className="w-[61px] h-[280px] flex flex-col justify-center gap-5 text-xl">
                {price.map((price) => {
                    return <div key={price}>{price}</div>
                })}
            </div>

            <div className="flex w-[790px]  gap-[2.0rem] text-xl items-end justify-between pt-[16px] h-[320px] ">
                {path == '/month' && (
                    <div className="flex w-[790px] pl-[20px]  gap-[9.5px] text-xl items-end justify-between pt-[16px] h-[320px] ">
                        {dayOfMonth.map((day, index) => {
                            return (
                                <div
                                    key={day + index}
                                    className=" pb-[12px]  flex flex-col items-center  gap-4 "
                                >
                                    {data && <Column data={data[index + 1]} />}

                                    <div className="h-4">{day}</div>
                                </div>
                            )
                        })}
                    </div>
                )}
                {path == '/half_year' && (
                    <div className="flex w-[790px]  gap-[6.0rem] text-xl items-end justify-between pt-[16px] h-[320px] ">
                        {monthOfHalfYear.map((month, index) => {
                            return (
                                <div
                                    key={month}
                                    className="  ml-4  pb-[14px] flex flex-col items-center gap-[11px] "
                                >
                                    {data && (
                                        <Column data={arrayOfData[index]} />
                                    )}{' '}
                                    <div className="h-4">{month}</div>
                                </div>
                            )
                        })}
                    </div>
                )}
                {path == '/year' && (
                    <div className="flex w-[790px]  gap-[37px] text-xl ml-2 items-end justify-between pt-[16px] h-[320px] ">
                        {monthOfYear.map((month, index) => {
                            return (
                                <div
                                    key={month}
                                    className=" flex items-center flex-col gap-[9px]"
                                >
                                    {data && (
                                        <Column data={arrayOfData[index]} />
                                    )}{' '}
                                    <div>{month}</div>
                                </div>
                            )
                        })}
                    </div>
                )}
            </div>
        </div>
    )
}
