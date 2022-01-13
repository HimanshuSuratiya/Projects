let source = "bbc-news";
let apikey = "804b50a9ffec46dbaa6d35971ea33c99";

let newsAccordion = document.getElementById("newsAccordion");

const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apikey}`,true);

xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    let newsHtml = "";
    articles.forEach(function (element, index) {
      let news = `  <div class="accordion-item">
                        <h2 class="accordion-header" id="heading${index}">
                            <button style="color: #CA8FC8" class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                               <b style="color: #623911">Breaking News ${index + 1}</b>..........${element["title"]}
                            </button>
                        </h2>

                        <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}"
                            data-bs-parent="#newsAccordion">
                            <div class="accordion-body" style="color: #606568"> ${element["description"]} <a href="${ element["url"]}" target="_blank" >Read More Here <a/> </div>
                        </div>
                    </div>`;
      newsHtml += news;
    });
    newsAccordion.innerHTML = newsHtml;
  }
};
xhr.send();
