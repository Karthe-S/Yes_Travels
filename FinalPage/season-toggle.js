const seasonRoutes = {
    "FinalPageSummerLowHampi.html": "MonsoonLB_hampi.html",
    "FinalPageSummerHighHampi.html": "MonsoonHB_hampi.html",
    "FinalPageSummerLowMysore.html": "MonsoonLB_mysore.html",
    "FinalPageSummerHighMysore.html": "MonsoonHB_mysore.html",
    "MonsoonLB_hampi.html": "FinalPageSummerLowHampi.html",
    "MonsoonHB_hampi.html": "FinalPageSummerHighHampi.html",
    "MonsoonLB_mysore.html": "FinalPageSummerLowMysore.html",
    "MonsoonHB_mysore.html": "FinalPageSummerHighMysore.html"
};

const currentPage = window.location.pathname.split("/").pop();
const targetPage = seasonRoutes[currentPage];

if (targetPage) {
    document.querySelector(".toggle .btn:not(.active)").addEventListener("click", function() {
        window.location.href = targetPage;
    });
}
