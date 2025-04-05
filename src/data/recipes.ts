export interface Recipe {
  id: number;
  title: string;
  description: string;
  videoId: string;
  image: string;
  slug: string;
  ingredients: string[];
  instructions: string[];
  publishedDate: string;  // Format: "YYYY-MM-DD"
}

export const recipes: Recipe[] = [
  {
    id: 1,
    title: "Classic Chocolate Cake",
    description: "A moist and rich chocolate cake that's perfect for any occasion",
    videoId: "YOUR_YOUTUBE_VIDEO_ID",
    image: "/placeholder.jpg",
    slug: "classic-chocolate-cake",
    publishedDate: "2024-03-15",
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
  },
  {
    id: 2,
    title: "Sourdough Bread",
    description: "Traditional sourdough bread with a perfect crust",
    videoId: "YOUR_YOUTUBE_VIDEO_ID",
    image: "/placeholder.jpg",
    slug: "sourdough-bread",
    publishedDate: "2024-03-10",
    ingredients: [
      "500g bread flour",
      "350g water",
      "100g sourdough starter",
      "10g salt",
    ],
    instructions: [
      "Mix flour and water, let rest for 30 minutes",
      "Add starter and salt, mix well",
      "Knead for 10 minutes",
      "Let rise for 4-6 hours",
      "Shape and proof for 1 hour",
      "Bake at 450°F for 30 minutes",
    ],
  },
  // Add more recipes here
  {
    id: 3,
    title: "Sourdough Bread",
    description: "Traditional sourdough bread with a perfect crust",
    videoId: "YOUR_YOUTUBE_VIDEO_ID",
    image: "/placeholder.jpg",
    slug: "sourdough-bread",
    publishedDate: "2024-03-10",
    ingredients: [
      "500g bread flour",
      "350g water",
      "100g sourdough starter",
      "10g salt",
    ],
    instructions: [
      "Mix flour and water, let rest for 30 minutes",
      "Add starter and salt, mix well",
      "Knead for 10 minutes",
      "Let rise for 4-6 hours",
      "Shape and proof for 1 hour",
      "Bake at 450°F for 30 minutes",
    ],
  },
]; 