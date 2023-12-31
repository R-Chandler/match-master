/*
Array for storing the tile image data
*/

const animalImages = () => [
    {imgSrc:"assets/images/animal-set/cat.webp", name:"cat"},
    {imgSrc:"assets/images/animal-set/cow.webp", name:"cow"},
    {imgSrc:"assets/images/animal-set/dog.webp", name:"dog"},
    {imgSrc:"assets/images/animal-set/horse.webp", name:"horse"},
    {imgSrc:"assets/images/animal-set/pig.webp", name:"pig"},
    {imgSrc:"assets/images/animal-set/sheep.webp", name:"sheep"},
    {imgSrc:"assets/images/animal-set/cat.webp", name:"cat"},
    {imgSrc:"assets/images/animal-set/cow.webp", name:"cow"},
    {imgSrc:"assets/images/animal-set/dog.webp", name:"dog"},
    {imgSrc:"assets/images/animal-set/horse.webp", name:"horse"},
    {imgSrc:"assets/images/animal-set/pig.webp", name:"pig"},
    {imgSrc:"assets/images/animal-set/sheep.webp", name:"sheep"},
];

//Randomise Function

const shufffle = () => {
    const tileImages = animalImages()
;    tileImages.sort(() => Math.random() - 0.5);
console.log(tileImages);
};

shufffle();




/*
Event Listener and functon to control hidden options menu
*/ 
let openOptions = document.getElementById('open-options');
openOptions.addEventListener('click',openOptionsMenu);

function openOptionsMenu() {
    let open = document.getElementById("hidden-menu");
    open.style.bottom = "0";
}

let closeOptions = document.getElementById('close-options');
closeOptions.addEventListener('click',closeOptionsMenu);

function closeOptionsMenu() {
    let close = document.getElementById("hidden-menu");
    close.style.bottom = "-400px";
}

/*
Javascript function used to change background-color from within the hidden menu 
*/

let color = document.getElementById('color-grid')

let colorChoice = e => {
    let result = document.body;
    result.style.backgroundColor = `${e.target.id}`;
}


color.addEventListener("click", colorChoice);