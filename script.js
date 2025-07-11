
let books = [
  {
    "name": "Die Geheimnisse des Ozeans",
    "author": "Clara Meer",
    "likes": 1250,
    "liked": true,
    "price": 19.99,
    "publishedYear": 2018,
    "genre": "Fantasy",
    "comments": [
      {
        "name": "Leser123",
        "comment": "Ein faszinierendes Abenteuerbuch, das mich von der ersten Seite an gefesselt hat."
      },
      {
        "name": "Bookworm84",
        "comment": "Eine romantische Geschichte, die mein Herz berührt und mich zum Nachdenken gebracht hat."
      },
      {
        "name": "FantasyFanatic",
        "comment": "Eine spannende Fantasiewelt, die ich nur schwer aus der Hand legen konnte."
      },
      {
        "name": "SciFiGuru",
        "comment": "Ein cleverer Science-Fiction-Roman mit interessanten Zeitreise-Konzepten und Charakteren."
      },
      {
        "name": "NovelLover",
        "comment": "Ein Buch, das voller magischer Überraschungen steckt und mich begeistert hat."
      }
    ]
  },
  {
    "name": "Der vergessene Pfad",
    "author": "Maximilian Schwarz",
    "likes": 980,
    "liked": false,
    "price": 14.50,
    "publishedYear": 2021,
    "genre": "Fantasy",
    "comments": []
  },
  {
    "name": "Die Farben des Himmels",
    "author": "Laura Blau",
    "likes": 1520,
    "liked": true,
    "price": 22.95,
    "publishedYear": 2019,
    "genre": "Romantik",
    "comments": [
      {
        "name": "LeserPeter",
        "comment": "Die Handlung war fesselnd und die Charaktere unglaublich lebendig dargestellt."
      },
      {
        "name": "BookLover21",
        "comment": "Ein romantisches Meisterwerk, das mich tief berührt und bewegt hat."
      },
      {
        "name": "FantasyNerd",
        "comment": "Fantastische Welten und epische Abenteuer - genau mein Geschmack!"
      },
      {
        "name": "SciFiEnthusiast",
        "comment": "Die Zeitreise-Elemente waren genial und haben die Story spannend gemacht."
      },
      {
        "name": "ReadingAddict",
        "comment": "Ein unvergessliches Buch, das mich auf eine magische Reise mitgenommen hat."
      }
    ]
  },
  {
    "name": "Das Rätsel der Zeit",
    "author": "Alexander Weiss",
    "likes": 750,
    "liked": false,
    "price": 18.00,
    "publishedYear": 2020,
    "genre": "Science-Fiction",
    "comments": [
      {
        "name": "BuchKenner",
        "comment": "Ein spannendes Abenteuer, das mich von Anfang an mitgerissen hat."
      },
      {
        "name": "LeseWurm",
        "comment": "Die Liebesgeschichte war herzergreifend und wunderschön geschrieben."
      }
    ]
  },
  {
    "name": "Der letzte Wächter",
    "author": "Sabine Grün",
    "likes": 1300,
    "liked": true,
    "price": 16.75,
    "publishedYear": 2017,
    "genre": "Fantasy",
    "comments": []
  },
  {
    "name": "Im Schatten des Mondes",
    "author": "Philipp Silber",
    "likes": 890,
    "liked": false,
    "price": 12.30,
    "publishedYear": 2022,
    "genre": "Science-Fiction",
    "comments": [
      {
        "name": "BücherLiebhaber",
        "comment": "Eine magische Reise durch eine faszinierende Fantasiewelt, absolut fesselnd."
      },
      {
        "name": "Leseratte",
        "comment": "Ein packender Science-Fiction-Roman, der mich zum Nachdenken gebracht hat."
      }
    ]
  },
  {
    "name": "Jenseits der Sterne",
    "author": "Oliver Schwarz",
    "likes": 1450,
    "liked": true,
    "price": 21.00,
    "publishedYear": 2015,
    "genre": "Science-Fiction",
    "comments": [
      {
        "name": "Leser123",
        "comment": "Ein fesselndes Abenteuer, das mich von Anfang bis Ende mitgerissen hat."
      }
    ]
  },
  {
    "name": "Das verborgene Königreich",
    "author": "Elena Gold",
    "likes": 920,
    "liked": false,
    "price": 17.50,
    "publishedYear": 2020,
    "genre": "Fantasy",
    "comments": [
      {
        "name": "Bookworm92",
        "comment": "Ein faszinierendes Buch, das mich von der ersten Seite an gefesselt hat."
      }
    ]
  },
  {
    "name": "Liebe in Zeiten des Krieges",
    "author": "Emilia Rot",
    "likes": 1800,
    "liked": true,
    "price": 19.99,
    "publishedYear": 2016,
    "genre": "Romantik",
    "comments": [
      {
        "name": "Bibliophile23",
        "comment": "Die Fantasiewelt war so lebendig, ich konnte das Buch kaum aus der Hand legen."
      },
      {
        "name": "StorySeeker",
        "comment": "Eine unglaublich berührende Liebesgeschichte, die mich tief bewegt hat."
      },
      {
        "name": "SciFiExplorer",
        "comment": "Spannende Zukunftsvisionen und interessante Charaktere machten diesen Roman einzigartig."
      }
    ]
  }
]

function init() {
  render();
}

function render() { // init starts with body onload, render 
  // the books with the function "pictureRendering"
  let booksRef = document.getElementById('content');

  for (let index = 0; index < books.length; index++) {
    booksRef.innerHTML += booksRendering(index);
    //newArrayComments = books[index].comments;
    //console.log(newArrayComments);
    likesRendering(index);   
    renderComments(index);
  }
}

function booksRendering(index) { // render books  //
  return ` <div id="book" class="bookfield">
              <header class="bookHeader"><h3>${books[index].name}</h3></header>
                <div class="pictureField">
                    <img src="./img/book-pink.png" alt="Illustration from small pichture">
                </div>
                <div class="bookDatas">
                    <div class="priceField">
                        <p>${books[index].price.toFixed(2) + " €"}</p>
                    </div>
                    <div id="like_container_${index}" class="likeField">                  
                    </div>
                </div>
                <div class="dataField">
                    <table>
                        <tr>
                            <td><b>Author</b></td>
                            <td>:</td>
                            <td>${books[index].author}</td>
                        </tr>
                        <tr>
                            <td><b>Erscheinungsjahr</b></td>
                            <td>:</td>
                            <td>${books[index].publishedYear}</td>
                        </tr>
                        <tr>
                            <td><b>Genre</b></td>
                            <td>:</td>
                            <td>${books[index].genre}</td>
                        </tr>
                    </table>
                </div>
                <div class="commentsField">                    
                    <h4>Kommentare:</h4>
                    <div id="comments${index}" class="comments">
                    </div>
                    <div class="inputField">
                      <input type="text" placeholder="Schreibe dein Kommentar ..." id="inputCommentsField${index}" class="input">
                      <img src="./img/send_white.svg" alt="send-icon" onclick="addComments(${index})">
                    </div>
                </div>
            </div>`
}

function likesRendering(index) {
  let likeContainer = document.getElementById(`like_container_${index}`);
  likeContainer.innerHTML += `<p id="likes${index}">${books[index].likes}</p>`;
  if (books[index].liked) { // =true
    likeContainer.innerHTML += `<img id="IMGliked${index}" class="likeField" src="./img/heart_pink.svg" alt="red heart for liked" onclick="likeRemove(${index})">`
  }
  else {
    likeContainer.innerHTML += `<img id="IMGunliked${index}" class="likeField" src="./img/heart_white.svg" alt="white heart for unliked" onclick="likeAdd(${index})">`
  }
  saveToLocalStorage();
}

function likeAdd(index) { // like hinzufügen durch anklicken herz
  let likeContainer = document.getElementById(`like_container_${index}`);
  let likeNumberForAdd = document.getElementById(`likes${index}`).innerHTML;
  likeNumberForAdd++; // likes wird um 1 erhöht
  likeContainer.innerHTML = ''; // div wird gelöscht
  likeContainer.innerHTML += `<p id="likes${index}">${books[index].likes}</p>
                              <img id="IMGliked${index}" class="likeField" src="./img/heart_pink.svg" alt="red heart for liked" onclick="likeRemove(${index})">`;
  document.getElementById(`likes${index}`).innerHTML = likeNumberForAdd;
}

function likeRemove(index) { // like entfernen durch anklicken herz
  let likeContainer = document.getElementById(`like_container_${index}`);
  let likeNumberForAdd = document.getElementById(`likes${index}`).innerHTML;
  likeNumberForAdd--; // likes wird um 1 reduziert
  likeContainer.innerHTML = ''; // div wird gelöscht
  likeContainer.innerHTML += `<p id="likes${index}">${books[index].likes}</p>
                              <img id="IMGliked${index}" class="likeField" src="./img/heart_white.svg" alt="white heart for unliked" onclick="likeAdd(${index})">`;
  document.getElementById(`likes${index}`).innerHTML = likeNumberForAdd;
}

function renderComments(index) {
  let placeholderComment = document.getElementById(`comments${index}`);

  if (books[index].comments.length == 0) {
    placeholderComment.innerHTML += `keine Kommentare, schreibe du das erste`;
  }
  else {
    for (let i = 0; i < books[index].comments.length; i++) {
      placeholderComment.innerHTML += commentsRendering(index, i);
    }
  }
}

  function commentsRendering(index, i) {
    return `<div class="individualComments">
              <div id="commentsName" class="commentsName">[${books[index].comments[i].name}]  :</div>
              <div id="commentsComment" class="commentsComment">${books[index].comments[i].comment}</div>
            </div> `
  }
}
