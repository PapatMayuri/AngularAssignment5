import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-college',
  templateUrl: './college.component.html',
  styleUrls: ['./college.component.css']
})
export class CollegeComponent
 {

  public LogChange(data)
  {
    console.log(data);
  }
}
