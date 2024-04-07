import Image from "next/image";

export default function Home() {
  return (
    <main className="py-10">
      <div className="flex flex-col items-center justify-center">
        <Image
          src="/favicon.ico"
          alt="logo"
          width={40}
          height={40}
        />
        <span className="text-xl font-bold">모든 명령어 문제를 한 곳에서!</span>
      </div>
      <div className="flex flex-row justify-items-center justify-around py-40 mx-auto">
        <button>
          <img src="\images\windows.svg" alt="windows" width={150} />
          <span>Windows</span>
        </button>
        <button>
          <img src="\images\unix.svg" alt="unix/linux" width={150} />
          <span>Unix / Linux</span>
        </button>
      </div>
    </main>
  );
}
