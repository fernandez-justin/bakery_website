import Link from "next/link";
import { recipes } from "@/data/recipes";

export default function Home() {
  // Get the most recent recipe by sorting by publishedDate
  const mostRecentRecipe = [...recipes].sort((a, b) => 
    new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  )[0];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="text-center py-12 bg-baking-butter rounded-lg shadow-md border border-baking-cinnamon/20">
        <h1 className={`text-5xl font-bold text-baking-chocolate mb-4 font-serif`}>
          Welcome to Baking with Justin
        </h1>
        <p className="text-xl text-baking-light-brown max-w-2xl mx-auto">
          Hope you find something to bake!
        </p>
      </section>

      {/* About Section */}
      <section className="bg-baking-sugar rounded-lg shadow-md p-6 border border-baking-butter">
        <h2 className="text-2xl font-bold text-baking-chocolate mb-4 font-serif">About Me</h2>
        <div className="prose max-w-none text-baking-light-brown">
          <p>
            Hi! I&apos;m Justin, a passionate baker who loves sharing my baking journey and helping others
            discover the joy of creating delicious treats in their own kitchen.
          </p>
        </div>
      </section>

      {/* Featured Recipe Section */}
      <section className="bg-baking-sugar rounded-lg shadow-md p-6 border border-baking-butter">
        <h2 className="text-2xl font-bold text-baking-chocolate mb-4 font-serif">Featured Recipe</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold text-baking-chocolate mb-2">{mostRecentRecipe.title}</h3>
            <p className="text-baking-light-brown mb-4">
              {mostRecentRecipe.description}
            </p>
            <Link
              href={`/recipes/${mostRecentRecipe.slug}`}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-baking-sugar bg-baking-chocolate hover:bg-baking-caramel transition-colors"
            >
              View Recipe
            </Link>
          </div>
          <div className="bg-baking-cream rounded-lg flex items-center justify-center h-48 border border-baking-butter">
            <p className="text-baking-light-brown">[Recipe Image]</p>
          </div>
        </div>
      </section>

      {/* Latest Video Section */}
      <section className="bg-baking-sugar rounded-lg shadow-md p-6 border border-baking-butter">
        <h2 className="text-2xl font-bold text-baking-chocolate mb-4 font-serif">Latest Videos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="aspect-[9/16]">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/83Ro__Z0uDA"
              title="Latest Baking Video 1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="aspect-[9/16]">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/A8CKKIhH2NA"
              title="Latest Baking Video 2"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="aspect-[9/16]">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/DHQK6GCAVdo"
              title="Latest Baking Video 3"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
