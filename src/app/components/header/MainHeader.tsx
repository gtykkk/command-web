import Image from "next/image"
import Link from "next/link"
import { menu } from "@/_constants/Menu"

const MainHeader = () => {
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
                    {/* dropdown 메뉴 만들어야함 */}
                    <div className="flex items-center">
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
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default MainHeader