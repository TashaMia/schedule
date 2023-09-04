'use client'
import { useRouter } from 'next/navigation'
import ScheduleSection from './[month]/page'
import { useEffect } from 'react'

export default function Home() {
    const navigate = useRouter()
    useEffect(() => {
        navigate.push('/month')
    }, [])
    return (
        <main className="flex min-h-screen min-w-screen flex-col  justify-center items-center">
            <ScheduleSection />
        </main>
    )
}
