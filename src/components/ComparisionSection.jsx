// src/components/ComparisonSection.jsx
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const ComparisonSection = () => {
    const tableRef = useRef()

    useEffect(() => {
        gsap.from(tableRef.current, {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: tableRef.current,
                start: 'top 80%',
            },
        })
    }, [])

    return (
        <div>
            <div className="bg-gradient-to-b to-[#031C19] from-gray-900 py-16 px-6 md:px-20" ref={tableRef}>
                <h2 className="text-4xl font-bold text-center mb-10">Compare With Other Brands</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse text-left text-sm md:text-base">
                        <thead className="bg-gray-100">
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
