

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

let imageElementArr = [];
let imageOverlayArr = [];
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
    console.log(`Image #${imageAmount+1} added to screen.`);
    let newImageBox = `
    <div class="images__item" id="item-${imageAmount+1}">
    <img src="${imageInfo[imageAmount].source}" 
    alt="${imageInfo[imageAmount].name}, ${imageInfo[imageAmount].date}, ${imageInfo[imageAmount].location}" class="images__item__imgage">
    
    <div class="images__item__text">
    <h3 class="images__item__text__header">Name: ${imageInfo[imageAmount].name}</h3>
    <p class="images__item__text__location">Location: ${imageInfo[imageAmount].location}</p>
    </div>
    </div>
    `;

    let newImageOverlayBox = `
    <div class="item__overlay__info" id="item__overlay__info-${imageAmount+1}">
        <img src="${imageInfo[imageAmount].source}" 
        alt="${imageInfo[imageAmount].name}, ${imageInfo[imageAmount].date}, ${imageInfo[imageAmount].location}" class="item__overlay__info__image">
    <div class="item__overlay__info__unselect"></div>
    </img>
                <div class="item__overlay__info__text">
                    <div class="item__overlay__info__unselect"></div>
                    <h3 class="item__overlay__info__text__header"><b>Name:</b> ${imageInfo[imageAmount].name}</h3>
                    <p class="item__overlay__info__text__description">
                        ${imageInfo[imageAmount].description}
                    </p>
                    <p class="item__overlay__info__text__date"><b>Date:</b> ${imageInfo[imageAmount].date}</p>
                    <p class="item__overlay__info__text__location"><b>Location:</b> ${imageInfo[imageAmount].location}</p>
                    <p class="item__overlay__info__text__photographer"><b>Photographer:</b> ${imageInfo[imageAmount].photohrapher}</p>
                </div>
            </div>
    `;
    imageList.insertAdjacentHTML("beforeend", newImageBox);
    itemOverlay.insertAdjacentHTML("beforeend", newImageOverlayBox);
    imageAmount++;
}

const addToImageList = () =>
{
    imageInfo[imageAmount] = {
        name: imageName.value,
        source: imageSrc.value,
        description: imageDesc.value,
        date: imageDate.value,
        location: imageLocation.value,
        photohrapher: imagePhotographer.value
    };
}

const inputValidation = () =>
{
    if((imageName !== null) && (imageSrc !== null) && (imageDesc !== null) && (imageDate !== null) && 
    (imageLocation !== null) && (imagePhotographer !== null))
    {
        return true;
    }
    else
    {
        console.log(imageName, "\n", imageSrc, "\n", imageDesc, "\n", imageDate, "\n", imageLocation, "\n", imagePhotographer);
        alert("Before submitting information, please check whether everything is filled out!");
    }
    return false;
}

const addToOverlay = () =>
{
    imageElementArr[imageAmount-1] = document.getElementById(`item-${imageAmount}`);
    imageOverlayArr[imageAmount-1] = document.getElementById(`item__overlay__info-${imageAmount}`);
    for(let i = 0; i < imageAmount; i++)
    {
        imageElementArr[i].addEventListener("click", () =>
        {
            imageOverlayArr[i].style.display = "flex";
            itemOverlay.style.display = "block";
        });
        imageOverlayArr[i].addEventListener("click", () =>
        {
            checkOverlaySelect = false;
        });
    }
}


itemOverlay.addEventListener("click", () =>
{
    if(checkOverlaySelect)
    {
        itemOverlay.style.display = "none";
        for(let i = 0; i < imageAmount; i++)
        {
            imageOverlayArr[i].style.display = "none";
        }
    }
    checkOverlaySelect = true;
});

submitBtn.addEventListener("click", () =>
{
    if(inputValidation())
    {
        addToImageList();
        renderImageList();
        addToOverlay();
    }
    
});



imageElementArr[0] = document.getElementById(`item-${1}`);
imageOverlayArr[0] = document.getElementById(`item__overlay__info-${1}`);
console.log(imageOverlayArr[0]);
imageElementArr[0].addEventListener("click", () =>
{
    imageOverlayArr[0].style.display = "flex";
    itemOverlay.style.display = "block";
});
imageOverlayArr[0].addEventListener("click", () =>
{
    checkOverlaySelect = false;
});