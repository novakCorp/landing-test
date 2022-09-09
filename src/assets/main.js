const API = "https://rickandmortyapi.com/api/character";
const content = document.getElementById("content");

async function fetchData(urlApi) {
  const response = await fetch(urlApi);
  const data = await response.json();
  return data;
}

// Clousures because it is just javascript
(async () => {
  try {
    const character = await fetchData(API);
    const results = character.results;
    let view = `
        ${results
          .map(
            (person) => `
            <div class="group relative">
                <div
                class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <img src=${person.image} alt=${person.species} class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-gray-700">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    ${person.name}
                </h3>
                </div>
            </div>
        `
          )
          .join("")}
    `;
    console.log(character);
    content.innerHTML = view;
  } catch (error) {
    console.log(error);
  }
})();
