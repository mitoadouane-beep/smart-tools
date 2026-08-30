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

        item.innerText = name;

        result.appendChild(item);
    });
}
