import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-host-form',
  templateUrl: './host-form.component.html',
  styleUrls: ['./host-form.component.css']
})
export class HostFormComponent implements OnInit {
  autoCompleteCallback2(selectedData:any) {
    
      }


  constructor() { }
  form1Visible 
  form2Visible 
  form3Visible 
  form4Visible
  form5Visible
  form6Visible
  form7Visible
  ngOnInit() {
    this.form1Visible = true;
    this.form2Visible = false;
    this.form3Visible = false;
    this.form4Visible = false;
    this.form5Visible = false;
    this.form6Visible = false;
    this.form7Visible = false;
  }
  back1(){
    this.form1Visible=true;
    this.form2Visible = false;
  }
  back2(){
    this.form3Visible = false;
    this.form2Visible = true;
  }
  back3(){
    this.form3Visible = true;
    this.form4Visible = false;
  }
  back4(){
    this.form4Visible = true;
    this.form5Visible = false;
  }
  view2(){
    this.form1Visible = false;
    this.form2Visible = true;
  }
  view3(){
    this.form3Visible = true;
    this.form2Visible = false;
  }
  view4(){
    this.form4Visible = true;
    this.form3Visible = false;
  }
  view5(){
    this.form5Visible = true;
    this.form4Visible = false;
    
  }
  view6(){
    this.form6Visible = true;
    this.form5Visible = false;
  }
  view7(){
    this.form6Visible = false;
    this.form7Visible = true;
  }


}
