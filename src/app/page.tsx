import Image from "next/image";
import { menu } from "./constants/Menu";
import Link from "next/link";

export default function Home() {

  return (
    <main className="">
      {/* <div className="flex flex-col items-center">
        <Image
          src="/favicon.ico"
          alt="logo"
          width={40}
          height={40}
          priority
        />
        <span className="text-xl">모든 명령어 문제를 한 곳에서!</span>
      </div> */}
      <div className="flex flex-row justify-evenly min-h-svh">
        {Object.values(menu).map((item) => (
          <div className="flex items-center" key={item.name}>
            <Link
              className="flex flex-col items-center"
              href={`/question/${item.value}`}
            >
              <Image
                src={item.icon as string}
                alt={item.name as string}
                width={150}
                height={150}
                priority
              />
              <span>{item.name}</span>
            </Link>
          </div>
        ))}
      </div>
    </main >
  );
}
