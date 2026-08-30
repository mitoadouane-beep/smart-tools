function countText() {
    const text = document.getElementById("textInput").value;

    const characters = text.length;

    const words =
        text.trim() === ""
            ? 0
            : text.trim().split(/\s+/).length;

    document.getElementById("textResult").innerText =
        "الكلمات: " + words +
        " | الحروف: " + characters;
}


function calculateProfit() {
    const cost =
        parseFloat(document.getElementById("cost").value) || 0;

    const price =
        parseFloat(document.getElementById("price").value) || 0;

    const profit = price - cost;

    document.getElementById("profitResult").innerText =
        "الربح: " + profit.toFixed(2);
}


function generateNames() {
    const type =
        document.getElementById("productType").value.trim();

    const result =
        document.getElementById("nameResults");

    if (type === "") {
        result.innerHTML =
            "<div class='name-item'>اكتب نوع المنتج أولاً.</div>";
        return;
    }

    const names = [
        "Smart " + type,
        "Pro " + type,
        "Creative " + type,
        "Premium " + type,
        "Easy " + type,
        "Ultimate " + type,
        "Digital " + type,
        "Magic " + type
    ];

    result.innerHTML = "";

    names.forEach(function(name) {
        const item = document.createElement("div");

        item.className = "name-item";

        function searchTools() {

    const searchInput =
        document.getElementById("toolSearch");

    const searchText =
        searchInput.value.toLowerCase().trim();

    const cards =
        document.querySelectorAll(".card");

    let found = 0;

    cards.forEach(function(card) {

        const text =
            card.innerText.toLowerCase();

        if (text.includes(searchText)) {

            card.style.display = "";

            found++;

        } else {

            card.style.display = "none";

        }

    });


    const noResults =
        document.getElementById("noResults");

    if (found === 0) {

        noResults.style.display = "block";

    } else {

        noResults.style.display = "none";

    }

}


function filterTools(category, button) {

    const cards =
        document.querySelectorAll(".card");


    document
        .querySelectorAll(".filter-btn")
        .forEach(function(btn) {

            btn.classList.remove("active");

        });


    button.classList.add("active");


    let found = 0;


    cards.forEach(function(card) {

        const cardCategory =
            card.getAttribute("data-category");


        if (
            category === "all" ||
            cardCategory === category
        ) {

            card.style.display = "";

            found++;

        } else {

            card.style.display = "none";

        }

    });


    document.getElementById("toolSearch").value = "";


    const noResults =
        document.getElementById("noResults");


    if (found === 0) {

        noResults.style.display = "block";

    } else {

        noResults.style.display = "none";

    }

}

        item.innerText = name;

        result.appendChild(item);
    });
}
