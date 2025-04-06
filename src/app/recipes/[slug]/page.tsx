import { recipes } from "@/data/recipes";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function RecipePage({
  params,
}: PageProps) {
  const { slug } = await params;
  const recipe = recipes.find((r) => r.slug === slug);

  if (!recipe) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-baking-chocolate">Recipe not found</h1>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto space-y-8">
      <header className="text-center bg-baking-butter rounded-lg py-8 border border-baking-cinnamon/20">
        <h1 className="text-4xl font-bold text-baking-chocolate mb-4 font-serif">{recipe.title}</h1>
        <p className="text-xl text-baking-light-brown mb-2">{recipe.description}</p>
        <p className="text-sm text-baking-cinnamon">Published on {new Date(recipe.publishedDate).toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })}</p>
      </header>

      {/* Video Section */}
      <section className="bg-baking-sugar rounded-lg shadow-md p-6 border border-baking-butter">
        <h2 className="text-2xl font-bold text-baking-chocolate mb-4 font-serif">Watch the Tutorial</h2>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            className="w-full h-64 rounded-lg"
            src={`https://www.youtube.com/embed/${recipe.videoId}`}
            title={recipe.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Ingredients Section */}
      <section className="bg-baking-sugar rounded-lg shadow-md p-6 border border-baking-butter">
        <h2 className="text-2xl font-bold text-baking-chocolate mb-4 font-serif">Ingredients</h2>
        <ul className="list-disc list-inside space-y-2 text-baking-light-brown">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>
              {ingredient}
            </li>
          ))}
        </ul>
      </section>

      {/* Instructions Section */}
      <section className="bg-baking-sugar rounded-lg shadow-md p-6 border border-baking-butter">
        <h2 className="text-2xl font-bold text-baking-chocolate mb-4 font-serif">Instructions</h2>
        <ol className="list-decimal list-inside space-y-4 text-baking-light-brown">
          {recipe.instructions.map((instruction, index) => (
            <li key={index}>
              {instruction}
            </li>
          ))}
        </ol>
      </section>
    </article>
  );
} 