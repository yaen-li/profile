const quotes = [
  "Website without visitors is like a ship lost in the horizon.  --Dr. Christopher Dayagdag",
  "Talk is cheap. Show me the code.  --Linus Torvalds",
  "The most dangerous phrase in the language is: We've always done it this way.  --Grace Hopper",
  "Premature optimization is the root of all evil.  --Donald Knuth",
  "Code is like humor. When you have to explain it, it’s bad.  --Cory House",
  "There are two ways to write error-free programs; only the third one works.  --Alan J. Perlis",
  "CSS is a mess. But it’s a beautiful mess.  --Unknown"
];

document.addEventListener("DOMContentLoaded", function () {
  // === Motto Animation (only if .motto exists) ===
  const mottoElement = document.querySelector('.motto');
  let quoteIndex = 0;

  function showNextQuote() {
    mottoElement.classList.remove('fade-in');

    setTimeout(() => {
      mottoElement.textContent = quotes[quoteIndex];
      mottoElement.classList.add('fade-in');
      quoteIndex = (quoteIndex + 1) % quotes.length;
    }, 300);
  }

  if (mottoElement) {
    showNextQuote(); // first display
    setInterval(showNextQuote, 4000); // every 4s
  }

  // === Back to Top Button ===
  const backToTopBtn = document.getElementById("backToTop");

  if (backToTopBtn) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 300) {
        backToTopBtn.style.display = "block";
      } else {
        backToTopBtn.style.display = "none";
      }
    });

    backToTopBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  } else {
    console.warn("Back to Top button not found.");
  }
});