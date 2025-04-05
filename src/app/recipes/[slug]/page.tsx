export default function RecipePage({
  params,
}: {
  params: { slug: string };
}) {
  // This would typically fetch recipe data from a database or CMS
  const recipe = {
    title: "Classic Chocolate Cake",
    description: "A moist and rich chocolate cake that's perfect for any occasion",
    videoId: "YOUR_YOUTUBE_VIDEO_ID",
    ingredients: [
      "2 cups all-purpose flour",
      "2 cups sugar",
      "3/4 cup unsweetened cocoa powder",
      "2 teaspoons baking soda",
      "1 teaspoon salt",
      "2 eggs",
      "1 cup milk",
      "1/2 cup vegetable oil",
      "2 teaspoons vanilla extract",
      "1 cup boiling water",
    ],
    instructions: [
      "Preheat oven to 350°F (175°C). Grease and flour two 9-inch cake pans.",
      "In a large bowl, combine flour, sugar, cocoa, baking soda, and salt.",
      "Add eggs, milk, oil, and vanilla. Beat on medium speed for 2 minutes.",
      "Stir in boiling water. Batter will be thin.",
      "Pour into prepared pans.",
      "Bake for 30-35 minutes or until a toothpick inserted comes out clean.",
      "Cool in pans for 10 minutes, then remove to wire racks to cool completely.",
    ],
    publishedDate: "2024-04-01",
  };

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
          <div className="bg-baking-cream rounded-lg flex items-center justify-center h-64 border border-baking-butter">
            <p className="text-baking-light-brown">[YouTube video will be embedded here]</p>
          </div>
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