import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-valid',
  templateUrl: './valid.component.html',
  styleUrls: ['./valid.component.css']
})
export class ValidComponent
 {

  public LogChange(data)
  {
    console.log(data);
  }

}
