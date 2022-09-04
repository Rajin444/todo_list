//오늘의 명언을 랜덤으로 나타나게 해보기
const qoutes= [
    {
        quote: "The way ti get started is to quit talking and begin born is busy dying",
        author: "Walt Disney", 
    },
    {
        quote: "Life is what happens when you're busy making other plans,",
        author: "John Lennon",
    },
    {
        quote: "The world is a book and those who do not travel read only one page.",
        author: "Saint Augustine",
    },
    {
        quote: "The world is a book and those who do not travel read only one page.",
        author: "Saint Augustine",
    },
    {
        quote: "Travel expands the mind and fills the gap.",
        author: "Sheda Savage"
    },
    {
        quote: "I never dreamed about success, I worked for it.",
        author: "Estee Lauder",
    },
    {
        quote: "Do not try to be original just try to be good.",
        author: "Paul Rand",
    },
    {
        quote: "Do not be afraid to give up the good to go for the great.",
        author: "John D.Rockefeller",
    },
    {
        quote: "Some people dream of succuess, while other people get up every morning and make it happen.",
        author: "Wayne Huizenga",
    },
    {
        quote: "When you go through hardships and decide not to surrender, that is strength.",
        author: "Arnold Schwarzenegger",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = qoutes[Math.floor(Math.random() * qoutes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

//Math.random(): 0부터 1 사이의 랜덤한 숫자를 제공
//Math.round()*n: 소수점을 반올림 
//Math.ceil(n) : 소수점을 올리는 것(올림)
//Math.floor(n): 소수점을 버리는 것(내림)

