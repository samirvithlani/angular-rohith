import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  constructor() { }

  series: any[] = [
    {
      "id": 1,
      "name": "Game of Thrones",
      "description": "Nine noble families fight for control over the mythical lands of Westeros, while an ancient enemy returns after being dormant for thousands of years.",
      "rating": "9.5"
    },
    {
      "id": 2,
      "name": "Breaking Bad",
      "description": "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
      "rating": "9.5"
    },
    {
      "id": 3,
      "name": "The Walking Dead",
      "description": "Sheriff's deputy Rick Grimes awakens from a coma to find a post-apocalyptic world dominated by flesh-eating zombies.",
      "rating": "8.5"
    },
    {
      "id": 4,
      "name": "Sherlock",
      "description": "A modern update finds the famous sleuth and his doctor partner solving crime in 21st century London.",
      "rating": "9.5"
    },
    {
      "id": 5,
      "name": "The Big Bang Theory",
      "description": "A",
      "rating": "9.5"

    }
        


  ]

  ngOnInit() {
  }

}
