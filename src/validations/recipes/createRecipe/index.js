import validator from 'validator';
import checkIngredients from './checkIngredients';
import checkSteps from './checkSteps';

export default (formData) => {

    const {
        recipeName,
        ingredients,
        prepTime,
        cookTime,
        directions,
        difficulty,
        category,
        description,
        file
    } = formData;

    if (validator.isEmpty(recipeName)) {
        return 'Fill recipe name';
    }
    if (!validator.isLength(recipeName, { min: 6, max: 20 })) {
        return 'Recipe name must be 6 to 20 characters long';
    }

    if (ingredients.length <= 0) {
        return 'add at least 1 ingredient';
    }

    if (ingredients.length >= 0) {
        const ingValidation = checkIngredients(ingredients);
        if (ingValidation.state === false) {
            return `Ingredient  #${ingValidation.index} is missing something`;
        }
    }

    if (directions) {
        const valDirections = checkSteps(directions);
        if (!valDirections.state) {
            return `Step  #${valDirections.index} too short [min 10 symbols]`;
        }
    }

    if (prepTime === 0) {
        return "set Prep Time";
    }

    if (cookTime === 0) {
        return "set Cook Time";
    }

    if (category === 'special') {
        return 'Type in the category or select existing one'
    }

    if (difficulty === 0) {
        return 'Select difficulty'
    }

    if (description.length <= 20) {
        return 'Description minimum 20 symbols';
    }

    if (!file) {
        return 'Add photo of the plate'
    }

    return false;
}