

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
let imageAmount = 2;
let imageInfo = [
    {
        name: "Arctic fox",
        source: "https://www.nationalparks.fi/documents/10550/60895402/Naalinpentuja_Utsjoella_kesalla_2023_PetriPiisilaMH_1050.jpg/b28d37ae-dc79-124a-c853-d2ae7d6f3b03?t=1694170568964",
        description: "Four Arctic fox cubs in front of the den. Arctic foxes are currently unable to survive in Finland without additional feeding. <br>Arctic foxes can survive frigid Arctic temperatures as low as 50 degrees Celsius. Arctic foxes lives in burrows, and in a blizzard they may tunnel into the snow to create shelter.",
        date: "Summer, 2023.",
        location: "<b>Finland</b>, Northern Lapland, Utsjoki.",
        photohrapher: "Petri Piisilä."
    },
    {
        name: "Maine Coon",
        source: "https://www.thesprucepets.com/thmb/aWULXjTWxZbCJ4GixA7JMw8K15w=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1189893683-e0ff70596b3b4f0687ba573e5a671f74.jpg",
        description: "The Maine Coon is a large domesticated cat breed. It is one of the oldest natural breeds in North America. The breed originated in the U.S. state of Maine, where it is the official state cat.",
        date: "Unknown",
        location: "Comfortable bed",
        photohrapher: "Alexandra Jursova"
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
        <ul class="item__overlay__info__text">
            <li><h3 class="item__overlay__info__text__header"><b>Name:</b> ${imageInfo[imageAmount].name}</h3></li>
            <li class="item__overlay__info__text__description">
                ${imageInfo[imageAmount].description}
            </li>
            <li class="item__overlay__info__text__date"><b>Date:</b> ${imageInfo[imageAmount].date}</li>
            <li class="item__overlay__info__text__location"><b>Location:</b> ${imageInfo[imageAmount].location}</li>
            <li class="item__overlay__info__text__photographer"><b>Photographer:</b> ${imageInfo[imageAmount].photohrapher}</li>
        </ul>
    </div>
    `;
    imageList.insertAdjacentHTML("beforeend", newImageBox);
    itemOverlay.insertAdjacentHTML("beforeend", newImageOverlayBox);

    //jQuery
    //$("#images").append(newImageBox);
    //$("#item__overlay").append(newImageOverlayBox);
    
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
    if((imageName.value!== "") && (imageSrc.value !== "") && (imageDesc.value !== "") && (imageDate.value !== "") && 
    (imageLocation.value !== "") && (imagePhotographer.value !== ""))
    {
        return true;
    }
    else
    {
        console.log(imageName.value, "\n", imageSrc.value, "\n", imageDesc.value, "\n", imageDate.value, "\n", imageLocation.value, "\n", imagePhotographer.value);
        //alert("Before submitting information, please check whether everything is filled out!");
    }
    return false;
}

const addToOverlay = () =>
{
    imageElementArr[imageAmount-1] = document.getElementById(`item-${imageAmount}`);
    imageOverlayArr[imageAmount-1] = document.getElementById(`item__overlay__info-${imageAmount}`);
        
    imageElementArr[imageAmount-1].addEventListener("click", () =>
    {
        //imageOverlayArr[imageAmount-1].style.display = "flex";
        //itemOverlay.style.display = "block";
        //jQuery
        $(`#item__overlay__info-${imageAmount}`).css("display", "flex");
        $(`#item__overlay`).css("display", "block");
    });
    imageOverlayArr[imageAmount-1].addEventListener("click", () =>
    {
        checkOverlaySelect = false;
    });
}


itemOverlay.addEventListener("click", () =>
{
    if(checkOverlaySelect)
    {
        itemOverlay.style.display = "none";
        for(let i = 0; i < imageAmount; i++)
        {
            imageOverlayArr[i].style.display = "none";
            //jQuery
            //$(`#item__overlay__info-${i+1}`).css("display", "none");
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


//First two images.
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

imageElementArr[1] = document.getElementById(`item-${2}`);
imageOverlayArr[1] = document.getElementById(`item__overlay__info-${2}`);
console.log(imageOverlayArr[1]);
imageElementArr[1].addEventListener("click", () =>
{
    imageOverlayArr[1].style.display = "flex";
    itemOverlay.style.display = "block";
});
imageOverlayArr[1].addEventListener("click", () =>
{
    checkOverlaySelect = false;
});