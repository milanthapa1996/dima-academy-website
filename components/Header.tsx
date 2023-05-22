import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div
      className="flex flex-col justify-between items-start md:items-center font-bold px-8 py-5
            lg:flex-row lg:space-x-5 bg-gradient-to-r from-green-200 via-green-500 to-green-700"
    >
      <div>
        <div className="h-10 w-24 md:h-20 md:w-60">
          <Link href={"/"}>
            <Image
              src="/images/dima_full_logo_bg_remove.png"
              alt="TFJ Logo"
              width={150}
              height={0}
            />
          </Link>
        </div>

        <h2 className="mt-1 text-gray-600 dark:text-gray-200 text-xs md:text-sm leading-loose">
          Welcome to{" "}
          <Link href={"/"}>
            <span className="underline underline-offset-2 decoration-4 decoration-army-green text-gray-600 border p-2 cursor-pointer">
              DIMA
            </span>
          </Link>
          {""}{" "}
          <i>
            Academy, The Premier Institute for Army Officer Cadet Preparation in
            Nepal
          </i>
        </h2>
      </div>
      <div className="bg-red-500 rounded-md p-1 md:p-2 md:animate-bounce mt-2 md:mt-0">
        <Link href={"https://nepalinformationhub.com"} target="_blank" rel="noopener noreferrer">
          <span className="text-white cursor-pointer">
            Free Learning Resources and Quizzes
          </span>
        </Link>
      </div>
    </div>
  );
}
