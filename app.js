const range = document.querySelector(".slider__range");
const pageViews = document.querySelector(".slider__views");
const price = document.querySelector(".slider__cost");
const toggleContainer = document.querySelector(".slider__toggle-middle");
let yearlyToggled = false;

toggleContainer.addEventListener("click", () => {
    if(toggleContainer.classList.contains("active")) {
        toggleContainer.classList.remove("active");
        toggleContainer.style.justifyContent = "flex-start";
        yearlyToggled = false;
        setRange();
    } else {
        toggleContainer.classList.add("active");
        toggleContainer.style.justifyContent = "flex-end";
        yearlyToggled = true;
        setRange();
    }
})

range.addEventListener("input", () => {
   setRange();
});

function setRange() {
    if(yearlyToggled) {
        if(range.value == 0) {
            pageViews.innerHTML = "1k pageviews";
            price.innerHTML = "FREE <span>/ month</span>";
        } else if (range.value == 1) {
            pageViews.innerHTML = "25k pageviews";
            price.innerHTML = "$72.00 <span>/ year</span>";
        } else if (range.value == 2) {
            pageViews.innerHTML = "50k pageviews";
            price.innerHTML = "$144.00 <span>/ year</span>";
        } else if (range.value == 3) {
            pageViews.innerHTML = "100k pageviews";
            price.innerHTML = "$288.00 <span>/ year</span>";
        } else {
            pageViews.innerHTML = "unlimited pageviews";
            price.innerHTML = "$576.00 <span>/ year</span>";
        }
    } else {
        if(range.value == 0) {
            pageViews.innerHTML = "1k pageviews";
            price.innerHTML = "FREE <span>/ month</span>";
        } else if (range.value == 1) {
            pageViews.innerHTML = "25k pageviews";
            price.innerHTML = "$8.00 <span>/ month</span>";
        } else if (range.value == 2) {
            pageViews.innerHTML = "50k pageviews";
            price.innerHTML = "$16.00 <span>/ month</span>";
        } else if (range.value == 3) {
            pageViews.innerHTML = "100k pageviews";
            price.innerHTML = "$32.00 <span>/ month</span>";
        } else {
            pageViews.innerHTML = "unlimited pageviews";
            price.innerHTML = "$64.00 <span>/ month</span>";
        }
    }
}