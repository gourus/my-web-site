import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name : string = 'Gouru Srinivas Reddy';
  iDo : string = 'Software Engineer and Technical writer';
  myImage : string = '../assets/myImage/face.jpg';
  aboutMe : string = 'I am an enthusiastic and a big loser. Who is famous for vision, something big and will leave in the middle without any reason. I don’t know why I am like this. I thought about making this website a big blog of knowledge but I don’t know how far I can make it. I am creating this browser to improve my angular knowledge. But am mostly spending my time on CSS. This is my experience till now. But am am good at C, DS, Java and JS(I think am good).';
  
  constructor() { }

  ngOnInit(): void {
  }

}
