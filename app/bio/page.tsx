import { NavigationMain } from "@/components/navigation/navigation-main";

export default function Bio() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 sm:items-start">
        <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-red-500 dark:text-zinc-50">
          bio.
        </h1>
        <div className="flex">
          <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
            <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
              better than AI.
            </h1>
            <p className="max-w-md text-lg leading-8">
              Empowering teams to deliver secure, high-performance software &
              exceptional UX. Human-led innovation while efficiently harnessing
              AI technology for successful outcomes.{" "}
              {/* <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Connect
            </a>{" "}
            with Andy or check out his{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Experience.
            </a>{" "} */}
            </p>
          </div>
          <NavigationMain />
        </div>
        <section>
          <p>Bio</p>
          {/* <div className="mx-auto max-w-(--breakpoint-xl) px-4 py-8 sm:py-16 lg:px-6">
            <div className="justify-center space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3">
              {TRAITS.map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col items-center justify-center text-center"
                >
                  <div className="bg-primary-100 dark:bg-primary-900 mb-4 flex size-10 items-center justify-center rounded-full p-1.5 text-green-700 lg:size-12">
                    {item.icon}
                  </div>
                  <h3 className="mb-2 text-md font-bold dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div> */}
        </section>
      </main>
    </div>
  );
}
