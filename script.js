
function searchMovies() {
    let input = document.getElementById("search")
        .value.toLowerCase();

    let movies = document.querySelectorAll(".movie-card");

    movies.forEach(movie => {
        let title = movie.dataset.title.toLowerCase();

        movie.style.display =
            title.includes(input) ? "block" : "none";
    });
}

function showReview(movie) {
    const reviews = {
        "Inception":
            "An amazing science-fiction thriller with mind-bending storytelling and brilliant visuals.",

        "Interstellar":
            "A visually stunning space adventure with emotional storytelling and powerful music.",

        "Avatar":
            "A beautiful fantasy adventure with impressive visual effects and an exciting world.",

        "Joker":
            "A dark psychological drama with a powerful lead performance."
    };

    alert(movie + "\n\n" + reviews[movie]);
}

document.getElementById("reviewForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("username").value;
    let movie = document.getElementById("movieName").value;
    let rating = document.getElementById("rating").value;
    let comment = document.getElementById("comment").value;

    let review = document.createElement("div");
    review.className = "review-card";

    let heading = document.createElement("h3");
    heading.textContent = name + " - " + movie;

    let score = document.createElement("p");
    score.textContent = "Rating: " + rating + "/10 ⭐";

    let message = document.createElement("p");
    message.textContent = comment;

    review.append(heading, score, message);

    document.getElementById("reviewOutput")
        .prepend(review);

    document.getElementById("reviewForm").reset();

    alert("Your review has been submitted!");
});
