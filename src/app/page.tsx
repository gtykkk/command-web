import Image from "next/image";

export default function Home() {
  return (
    <main className="sm:-mb-60">
      <div className="flex flex-col items-center justify-center">
        <Image
          src="/favicon.ico"
          alt="logo"
          width={100}
          height={100}
        />
        <span className="text-4xl font-bold">모든 명령어를 한 곳에서!</span>
      </div>
    </main>
  );
}
