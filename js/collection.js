window.onload = function() { var offerpage = document.getElementById("offer-page")
var offerclose=document.getElementById("close-page")

offerclose.onclick = function(){
    offerpage.style.display="none";
}}


var checkedValues = [];

function filterCollections(el) {
    if(el.checked) {
        checkedValues.push(el.value);
        console.log(checkedValues)
    }
    else {
        checkedValues = checkedValues.filter(item => item !== el.value);
    }
    filterCollectionsBySelected(true);
}

function filterCollectionsBySelected(show) {
    const elements = document.querySelectorAll(".cloths-item");
    if(checkedValues.length === 0) {
        elements.forEach((element) => {
            element.style.display = 'block';
        });
    }
    else {

        elements.forEach(element => {
            const containsAnyClass = checkedValues.some(className => element.classList.contains(className));
            if (containsAnyClass) {
               
                    element.style.display = 'block';
            }
            else {
                
                element.style.display = 'none';
            }
        });
    }
    
}

