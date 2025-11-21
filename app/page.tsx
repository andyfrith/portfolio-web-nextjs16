import { readdir, readFile } from "fs/promises";
import { join } from "path";
import matter from "gray-matter";
import Hello from "@/components/hello/hello";
import { Trait } from "@/lib/types";

async function getTraits(): Promise<Trait[]> {
  const releasesDirectory = join(process.cwd(), "content/traits");
  const fileNames = await readdir(releasesDirectory);

  const traits = await Promise.all(
    fileNames
      .filter((fileName) => fileName.endsWith(".md"))
      .map(async (fileName) => {
        const filePath = join(releasesDirectory, fileName);
        const fileContents = await readFile(filePath, "utf8");
        const { data, content } = matter(fileContents);

        return {
          title: data.title as string,
          content,
        };
      }),
  );

  return traits;
}

export default async function Home() {
  const traits = await getTraits();
  return (
    <div className="flex min-h-screen items-center justify-center font-sans">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between px-8 py-16 sm:items-start">
        {traits && <Hello traits={traits} />}
      </main>
    </div>
  );
}
