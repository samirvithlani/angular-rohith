import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor() { }
  movies:any[] = [
    {
      "id": 1,
      "name": "Avengers",
      "description": "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
      "rating": "8.5"
    },
    {
      "id": 2,
      "name": "Avatar",
      "description": "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      "rating": "9.0"
    },
    {
      "id": 3,
      "name": "Titanic",
      "description": "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
      "rating": "10"
    },
    {
      "id": 4,
      "name": "God Father",
      "description": "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
      "rating": "9.2"
    },
    {
      "id": 5,
      "name": "Inception",
      "description": "A thief who steals corporate secrets through use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
      "rating": "9.0"
    },
    {
      "id": 6,
      "name": "Interstellar",
      "description": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      "rating": "8.5"
    },


  ]

  ngOnInit() {
  }

}
