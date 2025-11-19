import { NavigationMain } from "@/components/navigation/navigation-main";
import Traits from "@/components/traits/traits";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 sm:items-start">
        <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-(--text-green-color) dark:text-(--text-green-color-dark)">
          hello.
        </h1>
        <div className="flex">
          <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
            <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight  dark:text-zinc-50">
              better than AI.
            </h1>
            <p className="max-w-md text-lg leading-8">
              Empowering teams to deliver secure, high-performance software &
              exceptional UX. Human-led innovation while efficiently harnessing
              AI technology for successful outcomes.{" "}
            </p>
          </div>
          <div className="hidden sm:block">
            <NavigationMain />
          </div>
        </div>
        <section>
          <Traits />
        </section>
      </main>
    </div>
  );
}
