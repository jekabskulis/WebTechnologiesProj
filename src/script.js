
//const item1 = document.getElementById("item-1");
const itemOverlay = document.getElementById("item__overlay");
const itemOverlaySelect = document.getElementById("item__overlay__info")
const imageList = document.getElementById("images");
const submitBtn = document.getElementById("submit-info");
const imageName = document.getElementById("image-name");
const imageSrc = document.getElementById("image-source");
const imageDesc = document.getElementById("image-description");
const imageDate = document.getElementById("image-date");
const imageLocation = document.getElementById("image-location");
const imagePhotographer = document.getElementById("image-photographer");

let checkOverlaySelect = true;

let imageAmount = 1;
let imageInfo = [
    {
        name: "Arctic fox",
        source: "https://www.nationalparks.fi/documents/10550/60895402/Naalinpentuja_Utsjoella_kesalla_2023_PetriPiisilaMH_1050.jpg/b28d37ae-dc79-124a-c853-d2ae7d6f3b03?t=1694170568964",
        description: "Four Arctic fox cubs in front of the den. Arctic foxes are currently unable to survive in Finland without additional feeding. <br>Arctic foxes can survive frigid Arctic temperatures as low as 50 degrees Celsius. Arctic foxes lives in burrows, and in a blizzard they may tunnel into the snow to create shelter.",
        date: "Summer, 2023.",
        location: "<b>Finland</b>, Northern Lapland, Utsjoki.",
        photohrapher: "Petri Piisilä."
    }
];

const renderImageList = () =>
{
    console.log(`Image #${imageAmount} added to screen.`);
    imageList.innerHTML += `
    <div class="images__item" id="item-${imageAmount}">
    <img src="${imageInfo[imageAmount - 1].source}" 
    alt="${imageInfo[imageAmount - 1].name}, ${imageInfo[imageAmount - 1].date}, ${imageInfo[imageAmount - 1].location}" class="images__item__imgage">
    
    <div class="images__item__text">
    <h3 class="images__item__text__header">Name: ${imageInfo[imageAmount - 1].name}</h3>
    <p class="images__item__text__location">Location: ${imageInfo[imageAmount - 1].location}</p>
    </div>
    </div>
    `;
    imageAmount++;
}

const addToImageList = () =>
{

}

const inputValidation = () =>
{

}

/*
item1.addEventListener("click", () => 
{
    itemOverlay.style.display = "block";
});
*/
itemOverlay.addEventListener("click", () =>
{
    if(checkOverlaySelect)
    {
        itemOverlay.style.display = "none";
    }
    checkOverlaySelect = true;
});



itemOverlaySelect.addEventListener("click", () =>
{
    checkOverlaySelect = false;
});

submitBtn.addEventListener("click", () =>
{
    renderImageList();
});