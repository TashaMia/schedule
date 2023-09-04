'use client'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import useClickHint from '@/hooks/useClickHint'

export default function FilterSection() {
    const pathname = usePathname()
    const navigate = useRouter()

    const [currentOption, setCurrentOption] = useState('')
    const [reverseArrow, setReverseArrow] = useState(false)
    const [isMenuShow, setIsMenuShow] = useState(false)

    const options = [
        {
            link: '/month',
            option: 'За последний месяц',
        },
        {
            link: '/half_year',
            option: 'За последние 6 месяцев',
        },
        {
            link: '/year',
            option: 'За последний год',
        },
    ]
    const nonCurrentOptions = options.filter(
        (option) => option.link != pathname
    )

    useEffect(() => {
        options.filter((i) => i.link == pathname && setCurrentOption(i.option))
    }, [pathname])

    useClickHint()

    return (
        <div className="flex flex-col">
            <div className="border-2  w-[380px] border-blue rounded-3xl h-12 flex px-4 justify-between items-center ">
                <p className="text-2xl hover:text-blue">{currentOption}</p>
                <button
                    onClick={() => {
                        setReverseArrow(!reverseArrow)
                        setIsMenuShow(!isMenuShow)
                    }}
                >
                    <Image
                        src="/arrow.svg"
                        alt="arrow"
                        width={30}
                        height={16}
                        className={
                            reverseArrow
                                ? `hintOfClick animate-rotateArrowDown rotate-180 `
                                : `hintOfClick  flex justify-center rotate-0 items-center animate-rotateArrowUp`
                        }
                    ></Image>
                </button>
            </div>
            {isMenuShow && (
                <div className="w-[380px]  z-30 flex flex-col  items-start justify-center gap-4 fixed mt-[47px] bg-white border-2 border-blue p-[20px] rounded-[28px]">
                    {nonCurrentOptions?.map((i) => {
                        return (
                            <button
                                onClick={() => {
                                    navigate.push(i.link)
                                    setIsMenuShow(false)
                                }}
                                key={i.option}
                                className={`hintOfClick text-2xl  border-[1px] border-white  hover:text-blue  `}
                            >
                                {i.option}
                            </button>
                        )
                    })}
                </div>
            )}
        </div>
    )
}
