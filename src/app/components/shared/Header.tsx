"use client";

import Image from "next/image"
import Link from "next/link"
import { menu } from "../../constants/Menu";

const Topbar = () => {
  return (
    <nav className="items-center sm:text-sm text-xs bg-gray-800 py-2">
      <div className="container mx-auto items-center">
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
          <div className="flex items-center" >
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
                  <span className="px-1">{items.name}</span>
                </Link>
              </div>
            ))}
          </div>
          {/* 모바일 시 나올 화면 nav =-요래 생긴걸로 만들 예정 */}
          {/* <div className="flex sm:hidden items-center" >
            {Object.values(menu).map((items) => (
              <div className="px-5" key={items.name}>
                <button
                  className="flex items-center"
                  type="button"
                  value={items.value}
                >
                  <Image
                    src={items.icon as string}
                    alt={items.name as string}
                    width={25}
                    height={25}
                    priority
                  />
                  <span className="px-1">{items.name}</span>
                </button>
              </div>
            ))}
          </div> */}
          {/*  */}
        </div>
      </div>
    </nav>
  )
}
export default Topbar