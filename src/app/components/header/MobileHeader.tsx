'use client';

import { menu } from "@/_constants/Menu"
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem, Button } from "@nextui-org/react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const MobileHeader = () => {

    return (
        <nav className="items-center md:text-sm text-xs bg-gray-800 py-2">
            <div className="items-center">
                <div className="px-3 flex flex-row justify-between">
                    <div className="flex items-center">
                        <Link href="/">
                            <Image
                                src="/favicon.ico"
                                alt="logo"
                                width={25}
                                height={25}
                                priority
                            />
                        </Link>
                        <p className="p-3 font-bold">
                            모든 명령어 문제를 한 곳에서!
                        </p>
                    </div>
                    <Dropdown backdrop="blur">
                        <DropdownTrigger>
                            <Button variant="bordered" className="text-lg grid-cols-1 gap-1">
                                ☰
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu variant="faded" aria-label="dropdownMenu" className="bg-gray-800">
                            <DropdownSection>
                                {Object.values(menu).map((items) => (
                                    <DropdownItem key={items.name} href={`/question/${items.value}`}>
                                        {/* <Image
                                            src={items.icon as string}
                                            alt={items.name as string}
                                            width={15}
                                            height={15}
                                            priority
                                        /> */}
                                        <span className="flex items-center">
                                            {items.label}
                                        </span>
                                    </DropdownItem>
                                ))}
                            </DropdownSection>
                        </DropdownMenu>
                    </Dropdown>
                    {/* <div className="flex items-center">
                        {Object.values(menu).map((items) => (
                            <div className="px-5" key={items.name}>
                                <Link
                                    className="flex items-center"
                                    href={`/question/${items.value}`}
                                >
                                    <Image
                                        src={items.icon as string}
                                        alt={items.name as string}
                                        width={25}
                                        height={25}
                                        priority
                                    />
                                    <span className="px-1">{items.label}</span>
                                </Link>
                            </div>
                        ))}
                    </div> */}
                </div>
            </div>
        </nav>
    )
}
export default MobileHeader