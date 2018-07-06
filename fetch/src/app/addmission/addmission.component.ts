import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addmission',
  templateUrl: './addmission.component.html',
  styleUrls: ['./addmission.component.css']
})
export class AddmissionComponent 
 {
  public LogChange(data)
  {
    console.log(data);
  }

}
