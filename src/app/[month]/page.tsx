import FilterSection from '@/app/components/FilterSection'
import Schedule from '../components/Schedule'

export default function ScheduleSection() {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="w-[995px] flex flex-col gap-7 h-[476px] ">
                <div className="flex justify-end">
                    <FilterSection />
                </div>
                <Schedule />
            </div>
        </div>
    )
}
