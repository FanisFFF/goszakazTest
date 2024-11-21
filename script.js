const newsText = document.getElementsByClassName("popular-news__link");
console.log(newsText);
for (let i = 0; i < newsText.length; i++) {
  if (newsText[i].text.length > 70) {
    newsText[i].innerHTML = newsText[i].innerHTML.substring(0, 70) + "...";
  }
}
