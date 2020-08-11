import { Component, OnInit } from '@angular/core';
import {School} from './school-class.class'

@Component({
  templateUrl:'./about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {

  isCollapsed: boolean = false;
  myImage : string = '../assets/myImage/face.jpg';
  aboutMe : string = 'I am an enthusiastic and a big loser. Who is famous for vision, something big and will leave in the middle without any reason. I don’t know why I am like this. I thought about making this website a big blog of knowledge but I don’t know how far I can make it. I am creating this browser to improve my angular knowledge. But am mostly spending my time on CSS. This is my experience till now. But am am good at C, DS, Java and JS(I think am good).';

  school : School = {
    name: "Navabharathi High School",
    marks: 494,
    percentage: 0.825,
    place: "Huzurabad"
  };

  scName: string = "Navab";

  constructor() {
  }

  ngOnInit(): void {
    
  }

  clickEvent(){
    console.log("ID one toggled...");
    this.isCollapsed = !this.isCollapsed;
  }
  
  public getSchoolName() : string {
    return this.school.name;
  }

}
