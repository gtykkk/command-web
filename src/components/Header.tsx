import Link from "next/link"

const Topbar = () => {
  return (
    <div className="items-center text-xl bg-gray-800 py-3">
      <div className="container mx-auto flex items-center">
        <Link href="./">
          <img src="../favicon.ico" alt="" width={35} />
        </Link>
        <p className="p-3 font-bold tracking-wider">
          모든 명령어를 한 곳에서!
        </p>
      </div>
      <div className="flex flex-row">
        <input type="button" value="Windows" />
        <input type="button" value="UNIX/LINUX" />
      </div>
    </div>
  )
}
export default Topbar