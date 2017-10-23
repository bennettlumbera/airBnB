import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-host-form',
  templateUrl: './host-form.component.html',
  styleUrls: ['./host-form.component.css']
})
export class HostFormComponent implements OnInit {

  constructor() { }
  
  form1Visible 
  form2Visible 
  form3Visible 
  ngOnInit() {
    this.form1Visible = true;
    this.form2Visible = false;
    this.form3Visible = false;
    
  }
  back1(){
    this.form1Visible=true;
    this.form2Visible = false;
  }
  view2(){
    this.form1Visible = false;
    this.form2Visible = true;
  }
  view3(){
    this.form3Visible = true;
    this.form2Visible = false;
  }

}
