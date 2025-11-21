import Experience from "@/components/experience/experience";

export default function ExperiencePage() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between px-8 py-16 sm:items-start">
        <Experience />
      </main>
    </div>
  );
}
