const cards = document.querySelectorAll(".destination-card");
const destinationLinks = {
    Low: {
        Hampi: "../FinalPage/FinalPageSummerLowHampi.html",
        Mysore: "../FinalPage/FinalPageSummerLowMysore.html"
    },
    High: {
        Hampi: "../FinalPage/FinalPageSummerHighHampi.html",
        Mysore: "../FinalPage/FinalPageSummerHighMysore.html"
    }
};

const budget = window.location.pathname.includes("resultsH") ? "High" : "Low";

cards.forEach(function(card) {
    const button = card.querySelector("button");
    const destination = button.dataset.destination;

    if (destinationLinks[budget][destination]) {
        button.addEventListener("click", function() {
            window.location.href = destinationLinks[budget][destination];
        });
    }
});