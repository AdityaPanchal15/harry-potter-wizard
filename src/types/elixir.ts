interface Ingredient {
  id: string;
  name: string;
}

interface Inventor {
  firstName: string;
  lastName: string;
}

export default interface Elixir {
  id: string;
  name: string;
  effect: string;
  characteristics: string;
  sideEffects: string;
  time: string;
  difficulty: string;
  ingredients: Ingredient[];
  inventors: Inventor[];
  manufacturer: string;
}