"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Header() {
    const pathname = usePathname()

    const linkData = [
        {
            name: "Performance",
            link: "/performance"
        },
        {
            name: "Reliability",
            link: "/reliability"
        },
        {
            name: "Scale",
            link: "/scale"
        }
    ]


    return (
        <div>
            <div className="absolute z-10 w-full">
                <div className="flex justify-between container mx-auto p-8 font-bol align-center">
                    <Link href="/" className="text-3xl font-bold">Home</Link>
                    <div className="text-xl space-x-4">
                        {
                            linkData.map((item, index) => {
                                return (
                                    <Link key={index} href={item.link} className={pathname === item.link ? "text-blue-500" : ""}>{item.name}</Link>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
