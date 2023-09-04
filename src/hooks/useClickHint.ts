import { useEffect } from 'react'

export default function useClickHint() {
    useEffect(() => {
        window.addEventListener('click', (e) => {
            const elems = Array.from(
                document.getElementsByClassName('hintOfClick')
            ) as HTMLButtonElement[]
            const target = e.target as HTMLElement
            if (!target?.classList.contains('hintOfClick')) {
                elems.map((elem: HTMLButtonElement) => {
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
    })
}
