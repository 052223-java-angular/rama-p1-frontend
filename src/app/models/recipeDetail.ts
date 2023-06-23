export interface RecipeDetail {
    id: string;
    title: string;
    summary: string;
    instructions:string;
    image:string;
    // adding this
    label:string;
    cusineType: string;
    shareAs: string;
    reviews: [any];

}

