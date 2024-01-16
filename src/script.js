
const item1 = document.getElementById("item-1");
const itemOverlay = document.getElementById("item__overlay");
const itemOverlaySelect = document.getElementById("item__overlay__info")

let checkOverlaySelect = true;

item1.addEventListener("click", () => 
{
    itemOverlay.style.display = "block";
});

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
