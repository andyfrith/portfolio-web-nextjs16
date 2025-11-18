import { readdir, readFile } from "fs/promises";
import { join } from "path";
import matter from "gray-matter";
import TraitMarkdown from "./trait-markdown";

interface Trait {
  title: string;
  content: string;
}

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
      })
  );

  return traits;
}

async function Traits() {
  const traits = await getTraits();

  return (
    <div className="mx-auto max-w-(--breakpoint-xl) px-4 py-8 sm:py-16 lg:px-6">
      <div className="justify-center space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3">
        {traits.map((item) => (
          <div
            key={item.title}
            className="flex flex-col items-center justify-center text-center"
          >
            <div className="bg-primary-100 dark:bg-primary-900 mb-4 flex size-10 items-center justify-center rounded-full p-1.5 text-green-700 lg:size-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#d5ffe1"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
              </svg>
            </div>
            <TraitMarkdown key={item.title} content={item.content} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Traits;
