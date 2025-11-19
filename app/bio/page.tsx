import { NavigationMain } from "@/components/navigation/navigation-main";

export default function Bio() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 sm:items-start">
        <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-(--text-green-color)">
          bio.
        </h1>
        <div className="flex">
          <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
            <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight  dark:text-zinc-50">
              better than AI.
            </h1>
            <p className="max-w-md text-lg leading-8">
              As a leader, I place the greatest emphasis on the success of each
              teammate. I get no greater satisfaction than by empowering those
              around me.
            </p>
          </div>
          <NavigationMain />
        </div>
        <section>
          <p className="pt-10">
            It is my belief that by growing people, investing in their
            potential, and giving them the space to excel, a team can achieve
            many great things.
          </p>
          <p className="pt-5">
            I’m focused on contributing to a healthy team culture, one based on
            great communication, collaboration, inclusivity and trust. I inspire
            my team to build great software while working closely with Product,
            Design and other cross-functional teams.
          </p>
          <p className="pt-5">
            Success in solving and delivering solutions is achieved with a clear
            focus on meeting shared goals and objectives. Inspired, high
            performing teams are guided by a vision; only by working together
            are they successful in delivering trusted, highest-quality solutions
            built upon a sound and proven architecture.
          </p>
          <p className="pt-5">
            I am excited for new, future endeavors and look forward to how those
            experiences will shape my evolution as a leader and innovator. My
            enthusiasm and passion for leading product innovation success grows
            by the day. I am currenly applying for both leadership and
            individual contributor roles:
          </p>
          <ul className="list-disc list-inside pt-2">
            <li>Engineering & Product Management</li>
            <li>Frontend/ UI/ UX/ React Development</li>
            <li>Full-Stack Development (TypeScript, Node.js)</li>
          </ul>
          <p className="pt-5">
            I’d love to learn how I might best impact your team or project.
            Please feel free to reach out to me:
            <ul className="pt-2 dark:text-gray-300 underline list-inside">
              <li>
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-mail float-left"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <a href="mailto:afrith.denver.usa@gmail.com">
                    afrith.denver.usa@gmail.com
                  </a>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-linkedin float-left"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  <a href="https://www.linkedin.com/in/afrith-denver/">
                    https://www.linkedin.com/in/afrith-denver/
                  </a>
                </div>
              </li>
            </ul>
          </p>
        </section>
      </main>
    </div>
  );
}
