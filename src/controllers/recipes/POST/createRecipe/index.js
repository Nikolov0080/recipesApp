import axios from 'axios';

export default (recipeName,
    ingredients,
    prepTime,
    cookTime,
    directions,
    difficulty,
    category,
    description,
    file,
    userId) => {
    // using FormData() to append file and form-data to the request

    var formData = new FormData();

    formData.append('recipeName', recipeName);
    formData.append('ingredients', JSON.stringify(ingredients));// saving it as a string for the db
    formData.append('prepTime', prepTime);
    formData.append('cookTime', cookTime);
    formData.append('directions', JSON.stringify(directions));// saving it as a string for the db
    formData.append('difficulty', difficulty);
    formData.append('category', category);
    formData.append('description', description);
    formData.append('image', file);

    let config = {
        headers: {
          creator_id: userId,
        }
      }

    return axios.default.post("https://interesting-woolen-trampoline.glitch.me/api/recipes/create-recipe",
        formData,
        config
    )
}