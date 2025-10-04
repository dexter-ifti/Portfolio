import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technical Skills | Ifti Taha",
  description:
    "Explore my technical skills in frontend, backend development, and tools. View my coding statistics from GitHub and LeetCode.",
  keywords: [
    "technical skills",
    "frontend",
    "backend",
    "React",
    "Node.js",
    "GitHub stats",
    "LeetCode",
  ],
};

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            My development expertise and coding statistics
          </p>
        </div>

        {/* Technical Skills Section */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {/* Programming Languages */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Programming Languages
            </h2>
            <div className="space-y-2">
              <div className="flex flex-wrap gap-2">
                {["JavaScript", "TypeScript", "Python", "Java", "C Language"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Frontend Skills */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Frontend
            </h2>
            <div className="space-y-2">
              <div className="flex flex-wrap gap-2">
                {["HTML5", "CSS3", "React JS", "Tailwind CSS"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Backend Skills */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Backend
            </h2>
            <div className="space-y-2">
              <div className="flex flex-wrap gap-2">
                {["Node.js", "Express.js", "HonoJS"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                {["MongoDB", "PostgreSQL", "Prisma ORM", "Mongoose", "MySQL"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Tools & Technologies */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Tools & Technologies
            </h2>
            <div className="space-y-2">
              <div className="flex flex-wrap gap-2">
                {["Git", "Docker", "Cloudflare", "AWS"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Coding Stats Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Coding Statistics
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            My development activity and progress
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* LeetCode Card */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              LeetCode Progress
            </h3>
            <div className="flex justify-center">
              <Image
                src="https://leetcard.jacoblin.cool/ifti_taha?ext=heatmap"
                alt="LeetCode Stats"
                width={500}
                height={300}
                className="rounded-lg"
              />
            </div>
          </div>

          {/* GitHub Stats */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              GitHub Statistics
            </h3>
            <div className="flex justify-center">
              <Image
                src="https://github-readme-stats.vercel.app/api?username=dexter-ifti&theme=dark&hide_border=true"
                alt="GitHub Stats"
                width={500}
                height={200}
                className="rounded-lg"
              />
            </div>
          </div>

          {/* GitHub Streak */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              GitHub Streak
            </h3>
            <div className="flex justify-center">
              <Image
                src="https://github-readme-streak-stats.herokuapp.com/?user=dexter-ifti&theme=dark&hide_border=true"
                alt="GitHub Streak"
                width={500}
                height={200}
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Top Languages */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Most Used Languages
            </h3>
            <div className="flex justify-center">
              <Image
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=dexter-ifti&theme=dark&hide_border=true&layout=compact"
                alt="Top Languages"
                width={400}
                height={300}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}