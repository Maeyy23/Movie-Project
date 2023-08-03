const movies = [
    {
      id: 1,
      year: 2008,
      title: 'The Dark Knight',
      image: 'https://th.bing.com/th/id/OIP.IjzAEjZ0jthJEv-rwK2cSgHaIl?pid=ImgDet&rs=1',
    },
    {
      id: 2,
      year: 1994,
      title: 'Pulp Fiction',
      image: 'https://th.bing.com/th/id/OIP.AmfDuzwqeCgz5nurOYOD5QHaK2?pid=ImgDet&rs=1',
    },
    {
      id: 3,
      year: 1999,
      title: 'The Matrix',
      image: 'https://images-na.ssl-images-amazon.com/images/I/813dE2pH7XL._AC_SL1417_.jpg',
    },
    {
      id: 4,
      year: 1972,
      title: 'The Godfather',
      image: 'https://image.tmdb.org/t/p/original/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg',
    },
    {
      id: 5,
      year: 2001,
      title: 'The Lord of the Rings: The Fellowship of the Ring',
      image: 'https://th.bing.com/th/id/R.a3f4edde79196b85b63602e3c3c90d8d?rik=%2f%2fysGADer4vmGg&riu=http%3a%2f%2fimg2-ak.lst.fm%2fi%2fu%2far0%2f749ed7e36bde48e08dafebc0f1233b4a&ehk=IVD0rGl2p8%2bihSRwpzlNnyNhPhqS2X6LlTDgfQVGxhU%3d&risl=&pid=ImgRaw&r=0',
    },
    {
      id: 6,
      year: 1993,
      title: 'Jurassic Park',
      image: 'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781683835455/jurassic-park-the-ultimate-visual-history-9781683835455_hr.jpg',
    },
    {
      id: 7,
      year: 1977,
      title: 'Star Wars: Episode IV - A New Hope',
      image: 'https://th.bing.com/th/id/R.0e0e64a11aa61007f7435a4146200341?rik=5sUjJomKIGursQ&pid=ImgRaw&r=0',
    },
    {
      id: 8,
      year: 2010,
      title: 'Inception',
      image: 'https://th.bing.com/th/id/OIP.YBJSh1dnVt8mDbP0KJ2IVwHaHa?pid=ImgDet&rs=1',
    },
    {
      id: 9,
      year: 1985,
      title: 'Back to the Future',
      image: 'https://th.bing.com/th/id/OIP.Su-u9aW8B3ntciKEJuCgbgHaLH?pid=ImgDet&rs=1',
    },
    {
      id: 10,
      year: 1995,
      title: 'Toy Story',
      image: 'https://th.bing.com/th/id/OIP.-66PgkOiR5_Vy8Cc25YHxQHaKj?pid=ImgDet&rs=1',
    },
    {
        id: 11,
        year: 2014,
        title: 'Interstellar',
        image: 'https://th.bing.com/th/id/OIP.8A707ygGKj_-MsgM-gOchgHaKe?pid=ImgDet&rs=1',
    },
    {
        id: 12,
        year: 2004,
        title: 'The Incredibles',
        image: 'https://th.bing.com/th/id/OIP.mQHmbI0AcalBTU9dqflZXAHaJY?pid=ImgDet&rs=1',
    },
    {
        id: 13,
        year: 1980,
        title: 'The Empire Strikes Back',
        image: 'https://th.bing.com/th/id/OIP.3R4PwgpnjCH4S1TBPhDLvwHaLH?pid=ImgDet&rs=1',
    },
    {
        id: 14,
        year: 2019,
        title: 'Joker',
        image: 'https://th.bing.com/th/id/OIP._GcM_5muN9RsR3I-EdAA5gHaKj?pid=ImgDet&rs=1',
    },
    {
        id: 15,
        year: 2021,
        title: 'Encanto',
        image: 'https://th.bing.com/th/id/OIP.QsUwZ9n2ltV4Lro9tvu5sQHaKj?pid=ImgDet&rs=1',
    }
    
];

//console.log(movies)
const movieCard = document.getElementById("card-container");

function displayMovieCard(movies){
  for (let i = 0; i < movies.length; i++){
    const movie = movies[i];

    const movieDetails = document.createElement("div");
    movieDetails.classList.add("movie-card");

    const image = document.createElement("img");
    image.src = movie.image;
    image.classList.add("poster-image");
    movieDetails.appendChild(image);

    const title = document.createElement('h2');
    title.textContent = movie.title;
    movieDetails.appendChild(title);

    const year = document.createElement('p');
    year.textContent = `Year: ${movies.year}`;
    movieDetails.appendChild(year);

    // const genre = document.createElement("p");
    // genre.textContent = `Genre: ${movie.genre}`;
    // movieDetails.appendChild(genre);

    movieCard.appendChild(movieDetails);
  }
}

displayMovieCard(movies);