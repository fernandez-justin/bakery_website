import Link from "next/link";
import { recipes } from "@/data/recipes";

export default function Recipes() {
  return (
    <div className="space-y-6">
      <div className="text-center bg-baking-butter rounded-lg py-8 border border-baking-cinnamon/20">
        <h1 className="text-4xl font-bold text-baking-chocolate mb-4 font-serif">Recipe Collection</h1>
        <p className="text-xl text-baking-light-brown max-w-2xl mx-auto">
          Browse through my collection of tested and perfected recipes
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-baking-sugar rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-baking-butter"
          >
            <div className="aspect-w-16 aspect-h-9 bg-baking-cream border-b border-baking-butter">
              <div className="flex items-center justify-center h-48">
                <p className="text-baking-light-brown">[Recipe Image]</p>
              </div>
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold text-baking-chocolate mb-2 font-serif">
                {recipe.title}
              </h2>
              <p className="text-baking-light-brown mb-4">{recipe.description}</p>
              <Link
                href={`/recipes/${recipe.slug}`}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-baking-sugar bg-baking-chocolate hover:bg-baking-caramel transition-colors"
              >
                View Recipe
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 