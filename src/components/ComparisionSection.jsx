// src/components/ComparisonSection.jsx
import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const ComparisonSection = () => {
    const container = useRef()

    useGSAP(() => {
        gsap.from('.comparison-table', {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.comparison-table',
                start: 'top 80%',
            },
        })
    }, { scope: container })

    return (
        <div ref={container}>
            <div className="bg-gradient-to-b to-[#031C19] from-gray-700 py-16 px-6 md:px-20 comparison-table">
                <h2 className="text-4xl font-bold text-center mb-10 font-['raleway']">Compare With Other Brands</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse text-left text-sm md:text-base font-['inter']">
                        <thead>
                            <tr>
                                <th className="p-4 font-semibold">Features</th>
                                <th className="p-4 font-semibold">Soniquo</th>
                                <th className="p-4 font-semibold">Bose QC45</th>
                                <th className="p-4 font-semibold">Sony XM5</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-t">
                                <td className="p-4">Battery Life</td>
                                <td className="p-4 text-green-600 font-bold">60 hrs ✅</td>
                                <td className="p-4">30 hrs ❌</td>
                                <td className="p-4">40 hrs ✅</td>
                            </tr>
                            <tr className="border-t">
                                <td className="p-4">Price</td>
                                <td className="p-4 text-green-600 font-bold">₹3,999</td>
                                <td className="p-4">₹29,999</td>
                                <td className="p-4">₹26,999</td>
                            </tr>
                            <tr className="border-t">
                                <td className="p-4">Water Resistance</td>
                                <td className="p-4 text-green-600">IPX5 ✅</td>
                                <td className="p-4">No ❌</td>
                                <td className="p-4">Yes ✅</td>
                            </tr>
                            <tr className="border-t">
                                <td className="p-4">ANC Level</td>
                                <td className="p-4 text-green-600">32dB</td>
                                <td className="p-4">30dB</td>
                                <td className="p-4">35dB</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ComparisonSection