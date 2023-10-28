/*
Event Listener and functon to control hidden options menu
*/ 
let openOptions = document.getElementById('open-options');
openOptions.addEventListener('click',openOptionsMenu);

function openOptionsMenu() {
    console.log("opened menu");
}

let closeOptions = document.getElementById('close-options');
closeOptions.addEventListener('click',closeOptionsMenu);

function closeOptionsMenu() {
    console.log("closed menu");
}
