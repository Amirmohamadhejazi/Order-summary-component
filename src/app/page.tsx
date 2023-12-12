/* eslint-disable @next/next/no-img-element */
import { pattern_background_desktop, illustration, music } from '../../public/images'

export default function Home() {
    return (
        <div className='w-full min-h-screen   flex  items-start justify-center bg-[#e0e8ff]  relative'>
            <img src={pattern_background_desktop.src} className='w-full' alt='' />
            <div className='whitespace-nowrap absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 '>
                <div className='w-full flex flex-col bg-white rounded-xl overflow-hidden gap-5 '>
                    <img src={illustration.src} alt='' />

                    <div className='flex flex-col items-center px-7 md:px-14 py-9 gap-5'>
                        <span className='text-2xl font-extrabold '>Order Summary</span>

                        <div className='flex flex-col text-center text-[#7280a7] text-sm md:text-base font-medium '>
                            <span>You can now listen to milions of songs, </span>
                            <span>audiobooks, and podcasts on any device </span>
                            <span>anywhere you like!</span>
                        </div>

                        <div className=' w-full flex gap-2 justify-between items-center bg-[#f5f7ff] p-5 md:p-9 rounded-xl'>
                            <div className='flex gap-5 items-center'>
                                <div className='w-12     h-w-12  bg-[#e0e8ff] rounded-full'>
                                    <img src={music.src} alt='' />
                                </div>
                                <div className='flex flex-col gap-1 text-sm font-medium  '>
                                    <span className='font-bold'>Annual Plan</span>
                                    <span className='text-[#7280a7]'>$59.99/year</span>
                                </div>
                            </div>
                            <span className='text-sm underline text-[#3829e0] font-bold'>Change</span>
                        </div>

                        <div className='w-full flex flex-col  gap-2 text-center font-semibold text-white'>
                            <div className='w-full bg-[#3829e0] rounded-md p-3 cursor-pointer'>Proceed to Payment </div>
                            <div className='w-full text-[#7280a7] rounded-md p-3 cursor-pointer'>Cancel Order </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
