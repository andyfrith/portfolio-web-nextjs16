import { NavigationMain } from "@/components/navigation/navigation-main";
import { Timeline } from "@/components/timeline/timeline";
import { experiencesData } from "@/data/data";

export default function TimelinePage() {
  return (
    <div className="flex min-h-screen items-center justify-center ">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 sm:items-start">
        <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-(--text-green-color)">
          experience.
        </h1>
        <div className="flex">
          <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
            <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight  dark:text-zinc-50">
              better than AI.
            </h1>
            <p className="max-w-md text-lg leading-8">
              Solving complex, multi-dimensional problems. Building
              unforgettable, AI-powered user experiences with React, Next.js and
              TypeScript. Driving transformative business results through a
              culture of extreme collaboration.
            </p>
          </div>
          <NavigationMain />
        </div>
        <section>
          <Timeline data={experiencesData} />
        </section>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row"></div>
      </main>
    </div>
  );
}
