"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <div className='border-2 border-dashed border-black p-4 w-1/2 mx-auto mt-10'>
            
        </div>
    )
}
