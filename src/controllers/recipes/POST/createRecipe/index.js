import axios from 'axios';

export default (recipeName,
    ingredients,
    prepTime,
    cookTime,
    directions,
    difficulty,
    category,
    description,
    file) => {
    // using FormData() to append file and form-data to the request

    var formData = new FormData();

    formData.append('recipeName', recipeName);
    formData.append('ingredients', ingredients);
    formData.append('prepTime', prepTime);
    formData.append('cookTime', cookTime);
    formData.append('directions', directions);
    formData.append('difficulty', difficulty);
    formData.append('category', category);
    formData.append('description', description);
    formData.append('image', file);

// TODO === SET HEADERS FOR USER-ID ON THE BACK END !
    return axios.default.post("http://localhost:5000/api/recipes/create-recipe",
        formData
    )
}