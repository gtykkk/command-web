import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center justify-center">
        <Image
          src="/favicon.ico"
          alt="logo"
          width={40}
          height={40}
          priority
        />
        <span className="text-xl">모든 명령어 문제를 한 곳에서!</span>
      </div>
      <div className="flex flex-row justify-evenly">
        <button>
          <Image
            src="images/windows.svg"
            alt="windows"
            width={150}
            height={150}
            priority
          />
          <span>Windows</span>
        </button>
        <button>
          <Image
            src="images/unix.svg"
            alt="unix/linux"
            width={150}
            height={150}
            priority
          />
          <span>Unix / Linux</span>
        </button>
      </div>
    </main>
  );
}
