import Image from "next/image"
import Link from "next/link"

const Topbar = () => {
  return (
    // 추후 모바일 화면에서 메뉴를 토글할 수 있는 버튼을 추가할 예정입니다.
    <nav className="items-center sm:text-sm text-xs bg-gray-800 py-2">
      <div className="container mx-auto items-center">
        <div className="px-3 flex flex-row justify-between">
          <div className="flex items-center">
            <Link href="./">
              <Image 
                src="/next.svg" 
                alt="logo" 
                width={25} 
                height={25}
              />
            </Link>
            <p className="p-3 font-bold">
              모든 명령어 문제를 한 곳에서!
            </p>
          </div>
          <div className="flex items-center">
            <div className="px-5">
              <button className="flex items-center" type="button" value="Windows">
                <Image 
                  src="/images/svg/windows.svg" 
                  alt="Windows" width={17} height={17} />
                <span className="px-1">Windows</span>
              </button>
            </div>
            <div className="px-5">
              <button className="flex items-center" type="button" value="Unix / Linux">
                <Image 
                  src="/images/svg/unix.svg" 
                  alt="Unix / Linux" 
                  width={17} 
                  height={17} 
                />
                <span className="px-1">Unix / Linux</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Topbar