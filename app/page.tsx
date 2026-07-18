import Transition from "@/components/transition";
import { AiOutlineRight, AiOutlineMail } from "react-icons/ai";
import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";
import { Projects } from "@/constants";
import Badge from "@/components/badge";
import Image from "next/image";
import Link from "next/link";
import WorkExperience from "@/components/workexp";

export default function Home() {
  const birthDate = new Date("2004-07-08");
  const today = new Date();
  const age =
    today.getFullYear() -
    birthDate.getFullYear() -
    (today.getMonth() < birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
      today.getDate() < birthDate.getDate())
      ? 1
      : 0);

  return (
    <main className="container mx-auto min-h-screen pt-6 items-center justify-center flex-col">
      <div className="flex mt-8 flex-col max-w-[640px] mx-auto p-5 lg:p-0">
        <div className="container">
          <h1 className="text-xl font-bold text-gray-400">
            I make
            <Transition />
          </h1>
          <p className="mt-3 text-xl text-gray-400">
            I&apos;m Taha a.k.a. dexter_ifti, a {age} year old developer living
            in India. I build backend-heavy web products, AI agent workflows,
            retrieval pipelines, and clean interfaces around them.
          </p>
          <p className="mt-3 text-xl text-gray-400">
            Working with{" "}
            <Badge href="https://expressjs.com">
              <Image
                src="/express-logo.svg"
                alt="Express.js"
                width={14}
                height={14}
                className="inline-block mr-1"
              />
              Express.js
            </Badge>
            ,{" "}
            <Badge href="https://nodejs.org/en">
              <Image
                src="/nodejs-logo.svg"
                alt="Node.js"
                width={14}
                height={14}
                className="inline-flex mr-1"
              />
              Node.js
            </Badge>
            ,{" "}
            <Badge href="https://www.prisma.io/" className="mr-1">
              <svg
                width="14"
                height="14"
                className="inline-block mr-1"
                viewBox="0 0 159 194"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.39749 123.139C0.476293 126.272 0.506027 130.226 2.47414 133.331L38.0964 189.524C40.4083 193.171 44.8647 194.834 49.0006 193.593L151.798 162.754C157.408 161.071 160.23 154.813 157.778 149.494L91.6953 6.14463C88.4726 -0.846183 78.7573 -1.42002 74.734 5.14279L2.39749 123.139ZM89.9395 38.9158C88.535 35.6658 83.7788 36.1664 83.0817 39.6375L57.64 166.316C57.1035 168.987 59.6044 171.268 62.215 170.489L133.24 149.287C135.313 148.669 136.381 146.379 135.522 144.393L89.9395 38.9158Z"
                  fill="#4C51BF"
                />
              </svg>
              Prisma
            </Badge>
            ,{" "}
            <Badge href="https://www.postgresql.org/" className="mr-1">
              <Image
                src="/postgresql-logo.svg"
                alt="PostgreSQL"
                width={14}
                height={14}
                className="inline-block mr-1"
              />
              PostgreSQL
            </Badge>
            ,{" "}
            <Badge href="https://www.langchain.com/">LangChain</Badge>
            ,{" "}
            <Badge href="https://platform.openai.com/docs">OpenAI SDK</Badge>,
            RAG, agents, and automation tooling.
          </p>
        </div>
        <div className="flex items-start mt-3 w-full justify-start flex-col">
          <Link
            href="https://www.x.com/DexterIfti/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="flex flex-row items-center justify-start">
              <div className="aspect-square flex-none h-[10px] overflow-hidden relative w-2.5 will-change-transform bg-green-500 rounded-full"></div>
              <div className="flex flex-col justify-start shrink-0 opacity-100 ml-2 ">
                <p className="text-white">Available for new opportunities</p>
              </div>
            </div>
          </Link>
          <br />
          <div className="flex flex-row gap-3">
            <a
              href="https://www.x.com/DexterIfti/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center justify-start gap-2.5 
              text-white transition duration-300 ease-in-out
              bg-neutral-700 hover:bg-neutral-900 rounded-md px-3 py-2.5  
            "
            >
              <FiTwitter className="text-white text-xl" />
            </a>
            <a
              href="https://github.com/dexter-ifti"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center justify-start gap-2.5 
              text-white transition duration-300 ease-in-out
              bg-neutral-700 hover:bg-neutral-900 rounded-md px-3 py-2.5  
            "
            >
              <FiGithub className="text-white text-xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/ifti-taha/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center justify-start gap-2.5 
              text-white transition duration-300 ease-in-out
              bg-neutral-700 hover:bg-neutral-900 rounded-md px-3 py-2.5  
            "
            >
              <FiLinkedin className="text-white text-xl" />
            </a>
            <a
              href="https://leetcode.com/ifti_taha/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center justify-start gap-2.5 
              text-white transition duration-300 ease-in-out
              bg-neutral-700 hover:bg-neutral-900 rounded-md px-3 py-2.5  
            "
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"
                />
              </svg>
            </a>
            <a
              href="mailto:tahaiftikhar8@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center justify-start gap-2.5 
              text-white transition duration-300 ease-in-out
              bg-neutral-700 hover:bg-neutral-900 rounded-md px-3 py-2.5  
            "
            >
              <AiOutlineMail className="text-white text-xl" />
            </a>
          </div>
        </div>
        <div className="w-full h-[1px] "></div>
         <WorkExperience /> 
        <div className="mt-5">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl text-white mt-5 mb-5">Projects</h1>
            <Link href="/project" className="text-neutral-500 hover:underline">
              more
            </Link>
          </div>
          <div className="flex flex-col">
            {Projects.slice(0, 5).map((project) => (
              <Link
                className="proj group"
                key={project.name.replace(" ", "-")}
                href={`/project/${project.slug}`}
              >
                <article className="flex flex-row gap-0 items-center justify-between lg:justify-center mt-3 mb-3 w-full">
                  <div className="flex flex-col justify-start opacity-100 flex-none shrink-0 h-auto relative whitespace-pre w-auto mr-3">
                    <h1 className="text-lg font-medium leading-[1.3em] text-left text-gray-300 group-hover:text-white">
                      {project.name}
                    </h1>
                  </div>
                  <div className="w-full mr-2 border-y border-gray-700 rounded-2 transition duration-110 opacity-80 group-hover:border-white"></div>
                  <AiOutlineRight
                    className="text-gray-400 transition-all duration-[110ms] group-hover:text-white h-4 w-4 shrink-0"
                    size={20}
                  />
                </article>
              </Link>
            ))}
          </div>
        </div>

        <section className="mt-8">
          <h2 className="text-2xl text-white mt-5 mb-4">GitHub activity</h2>
          <a
            href="https://github.com/dexter-ifti"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-lg border border-neutral-800 bg-neutral-900/50 p-3 outline-none transition-colors hover:border-neutral-700 focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#111010]"
            aria-label="View Taha's GitHub profile"
          >
            {/* eslint-disable-next-line @next/next/no-img-element -- ghchart serves a remote SVG contribution graph. */}
            <img
              src="https://ghchart.rshah.org/7F461B/dexter-ifti"
              alt="Taha's GitHub contribution chart"
              className="w-full"
              loading="lazy"
            />
          </a>
        </section>

      </div>
    </main>
  );
}
