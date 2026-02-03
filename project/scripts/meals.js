const meals = [
	{
		nutritionalValue: "470 kcal, 23g of Protein and 63g of Carbo",
		meal: `Tapioca filled with scrambled eggs<br>Greek yogurt on the side (plain)<br>Passion fruit (maracujá) juice (no added sugar)<br>`,
		type: "breakfast",
	},
	{
		meal: `Rap10 filled with tuna, chopped boiled egg and a small amount of mayonnaise<br>
Cupuaçu juice.`,
		nutritionalValue: "420 kcal, 32g of Protein and 38g of Carbo",
		type: "breakfast",
	},
	{
		meal: `Greek yogurt<br>
Protein shake (mixed into the yogurt or taken separately)<br>
Integral bread toast with scrambled eggs<br>
Cupuaçu juice.<br>`,
		nutritionalValue: "520 kcal, 40g of Protein and 45g of Carbo",
		type: "breakfast",
	},
	{
		meal: `Crepioca (tapioca scrambled with eggs) with cheese and oregano.<br>
Passion fruit juice.`,
		nutritionalValue: "480 kcal, 26g of Protein and 45g of Carbo",
		type: "breakfast",
	},
	{
		meal: `Grilled chicken breast with rice and beans<br>
Salad (lettuce, tomato, onion)<br>
Olive oil (1 tsp)`,
		nutritionalValue: "520 kcal, 38g of Protein and 45g of Carbo",
		type: "lunch",
	},
	{
		meal: `Grilled or baked fish <br>
Sweet potato or cassava <br>
Cooked vegetables (carrot, chayote, zucchini)`,
		nutritionalValue: "480 kcal, 32g of Protein and 42g of Carbo",
		type: "lunch",
	},
	{
		meal: `Lean ground beef with white rice, beans and 
kale with garlic for the salad.`,
		nutritionalValue: "540 kcal, 36g of Protein and 48g of Carbo",
		type: "lunch",
	},
	{
		meal: `Grilled rib eye steak with rice and farofa<br>
vinaigrette<br>
Olive oil (1 tsp)`,
		nutritionalValue: "650 kcal, 40g of Protein and 50g of Carbo",
		type: "lunch",
	},
	{
		meal: `150g grilled chicken breast<br>
Zucchini, carrot, onion sautéed with 1 tsp olive oil`,
		nutritionalValue: "430 kcal, 38g of Protein and 22g of Carbo",
		type: "dinner",
	},
	{
		meal: `150g lean ground beef<br>
		Zucchini and carrot sauteed`,
		nutritionalValue: "450 kcal, 35g of Protein and 20g of Carbo",
		type: "dinner",
	},
	{
		meal: `Grilled chicken breast with rice and beans<br>
Salad (lettuce, tomato, onion)<br>
Olive oil (1 tsp)`,
		nutritionalValue: "520 kcal, 38g of Protein and 45g of Carbo",
		type: "dinner",
	},
	{
		meal: `150 g grilled or baked fish (tambaqui, pirarucu)<br>
Pumpkin purée with garlic and olive oil`,
		nutritionalValue: "420 kcal, 34g of Protein and 28g of Carbo",
		type: "dinner",
	},
];

const ingredients = [
	"Tapioca",
	"eggs",
	"Integral bread",
	"Greek yogurt",
	"chicken breast",
	"rice",
	"beans",
	"olive oil",
	"fish",
	"vegetables",
	"ground beef",
	"Protein shake",
	"zucchini",
	"Passion fruit",
	"pumpkin",
	"garlic",
	"Rap10",
	"Sweet potato",
	"tuna",
	"egg",
	"mayonnaise",
	"Cupuaçu",
	"cheese",
	"oregano",
	"lettuce",
	"tomato",
	"onion",
	"cassava",
	"vinaigrette",
	"rib eye steak",
	"farofa",
];

const getMealsByType = (type) => {
	return meals.filter((meal) => meal.type === type);
};

const getMealsByIndex = (index) => {
	const breakfast = getMealsByType("breakfast")[index];
	const lunch = getMealsByType("lunch")[index];
	const dinner = getMealsByType("dinner")[index];
	return [breakfast, lunch, dinner];
};

const makeIngredientsBold = (meal) => {
	let modifiedMeal = meal;
	ingredients.forEach((ingredient) => {
		meal.toLowerCase().includes(ingredient.toLowerCase()) &&
			(modifiedMeal = modifiedMeal.replace(
				ingredient,
				`<strong>${ingredient}</strong>`,
			));
	});
	return modifiedMeal;
};

const createRowOfTable = (index) => {
	const mealsOfTheDay = getMealsByIndex(index);
	return `
          <tr>
            <td>
		${makeIngredientsBold(mealsOfTheDay[0].meal)}
		<p>${mealsOfTheDay[0].nutritionalValue}</p>
            </td>
            <td>
		${makeIngredientsBold(mealsOfTheDay[1].meal)}
		<p>${mealsOfTheDay[1].nutritionalValue}</p>
            </td>
            <td>
		${makeIngredientsBold(mealsOfTheDay[2].meal)}
		<p>${mealsOfTheDay[2].nutritionalValue}</p>
            </td>
          </tr>
`;
};

const getAllMealsTable = () => {
	const meal = getMealsByType("breakfast");
	const mealLength = meal.length;
	let result = ``;
	for (let i = 0; i < mealLength; i++) result += createRowOfTable(i);
	return result;
};

document.getElementById("meals-table-body").innerHTML = getAllMealsTable();

const getIngredients = () => {
	return ingredients
		.map(
			(ingredient) => `
        <label>
          <input type="checkbox">
          <span></span>
${ingredient}
        </label>`,
		)
		.join("");
};

console.log(getIngredients());

document.getElementById("grocery-list").innerHTML = `${getIngredients()}`;
