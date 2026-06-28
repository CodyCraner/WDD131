function random(num) {
	return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
	const listLength = list.length;
	const randomNum = random(listLength);
	return list[randomNum];
}

function recipeTemplate(recipe) {
	return `<figure class="recipe">
	<img src="images/${recipe.image}" alt="image of ${recipe.name}" />
	<figcaption>
		<h2>${recipe.name}</h2>
        <p class="recipe__ratings">
            ${ratingTemplate(recipe.rating)}
        </p>
		<p class="recipe__description">
            ${recipe.description}
		</p>
</figcaption>
</figure>`;
}

function ratingTemplate(rating) {
	// begin building an html string using the ratings HTML written earlier as a model.
	let html = `<span
	class="rating"
	role="img"
	aria-label="Rating: ${rating} out of 5 stars"
    >`
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
        } else {
            html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
        }
    }
    html += `</span>`;
    return html;
    }

function renderRecipes(recipeList) {
    const outputElement = document.querySelector("#recipe-list"); 
    const recipesHTML = recipeList.map(recipeTemplate).join("");
    outputElement.innerHTML = "";
    outputElement.innerHTML = recipesHTML;}

function init() {
	const recipe = getRandomListEntry(recipes);
	renderRecipes([recipe]);
}
init();


document.querySelector("#search-form").addEventListener("submit", searchHandler);

function filter(query) {
	const filtered = recipes.filter(recipe => 
		recipe.name.toLowerCase().includes(query) ||
		recipe.description.toLowerCase().includes(query) ||
		recipe.tags.find(tag => tag.toLowerCase().includes(query)) ||
		recipe.ingredients.find(ingredient => ingredient.toLowerCase().includes(query))
	);

	return filtered.sort((a, b) => a.name.localeCompare(b.name));
}

function searchHandler(e) {
	e.preventDefault();
	const query = document.querySelector("#search-input").value.toLowerCase();
	const results = filter(query);
	renderRecipes(results);
}