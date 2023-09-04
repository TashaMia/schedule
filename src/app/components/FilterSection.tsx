'use client'
import { useAtomValue } from 'jotai'
import { hintOfClick } from '../atoms'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function FilterSection() {
    const [currentOption, setCurrentOption] = useState('')
    useEffect(() => {
        window.addEventListener('click', (e) => {
            let elems = Array.from(
                document.getElementsByClassName('hintOfClick')
            )

            if (!e.target?.classList.contains('hintOfClick')) {
                elems.map((elem) => {
                    if (e.target != elem) {
                        elem.style.background = '#67e8f9'
                        elem.style.opacity = '0.7'
                        elem.style.border = '1px solid #22d3ee'
                        setTimeout(() => {
                            elem.style.background = 'inherit'
                            elem.style.border = '1px white solid'
                            elem.style.transitionDuration = '500ms'
                        }, 200)
                    }
                })
            }
        })
    }, [])

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
    const pathname = usePathname()
    const navigate = useRouter()

    const [reverseArrow, setReverseArrow] = useState(false)
    const [filterOption, setFilterOption] = useState(false)
    const nonCurrentOptions = options.filter(
        (option) => option.link != pathname
    )
    useEffect(() => {
        options.filter((i) => i.link == pathname && setCurrentOption(i.option))
    }, [pathname])
    return (
        <div className="flex flex-col">
            <div className="border-2  w-[380px] border-blue rounded-3xl h-12 flex px-4 justify-between items-center ">
                <p className="text-2xl hover:text-blue">{currentOption}</p>
                <button
                    onClick={() => {
                        setReverseArrow(!reverseArrow)
                        setFilterOption(!filterOption)
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
            {filterOption && (
                <div className="w-[380px]  z-30 flex flex-col  items-start justify-center gap-4 fixed mt-[47px] bg-white border-2 border-blue p-[20px] rounded-[28px]">
                    {nonCurrentOptions &&
                        nonCurrentOptions.map((i) => {
                            return (
                                <button
                                    onClick={() => {
                                        navigate.push(i.link)

                                        setFilterOption(false)
                                    }}
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
