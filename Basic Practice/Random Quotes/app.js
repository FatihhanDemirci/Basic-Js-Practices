const result = document.querySelector("#quote");
const btn = document.querySelector(".btn");

const quotes = [
  "Of course it is happening inside your head, Harry, but why on earth should that mean that it is not real? - Albus Dumbledore",

  "If you want your children to be intelligent, read them fairy tales. If you want them to be more intelligent, read them more fairy tales. -Albert Einstein",

  "There is no friend as loyal as a book. - Ernest Hemingway",
  "Success is not final, failure is not fatal: it is the courage to continue that counts. -Winston S. Churchill",

  "One good thing about music, when it hits you, you feel no pain. -Bob Marley",

  "Never tell the truth to people who are not worthy of it. -Mark Twain",
  "There is only one thing that makes a dream impossible to achieve: the fear of failure. -Paulo Coelho",
];

btn.addEventListener("click", () => {
  const random = Math.floor(Math.random() * quotes.length);
  result.textContent = `${quotes[random]}`;
});
