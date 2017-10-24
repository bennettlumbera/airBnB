import { Component, OnInit, Renderer, ElementRef, ViewChild  } from '@angular/core';
import { User } from '../user'
import { UserService } from '../user.service';
import 'rxjs/add/operator/toPromise';
import { PropertyService } from '../property.service';

import { Router } from '@angular/router'
import {IMyDrpOptions, IMyDateRangeModel} from 'mydaterangepicker';
// import { IMyDate } from "./my-date.interface";
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  // template: '<ng4geo-autocomplete (componentCallback)="autoCompleteCallback1($event)"></ng4geo-autocomplete>'
})
export class NavComponent implements OnInit {
  
  @ViewChild('fileInput') fileInput:ElementRef;
  @ViewChild('loginInput') loginInput: ElementRef;
  @ViewChild('dateInput') dateInput: ElementRef;
  searchParams;
  currYear = (new Date()).getFullYear();
  currMonth = (new Date()).getMonth();
  currDay = (new Date()).getDate();
  todaysDate = this.currMonth+'/'+this.currDay+'/'+ this.currYear;

  



  autoCompleteCallback1(selectedData:any) {

  }

  
  private myDateRangePickerOptions: IMyDrpOptions = {
    dateFormat: 'mmm dd yyyy',
    disableUntil: {
      year: new Date().getFullYear(),
      month: new Date().getMonth()+1,
      day: new Date().getDate()-1,
    },
    maxYear: new Date().getFullYear()+2,
    height: '45px',
    
    
  
};



private model: Object = {beginDate: null,
endDate: null};
  
    constructor(private _userService: UserService, private _router: Router, private _propertyService: PropertyService, private _renderer: Renderer) { }
  
    ngOnInit() {
      
    }
      user = new User();
      currUser = null;
      pwConfirm = '';
      passwordMatch = false;
      regErrors = [];
    
      checkPassword() {
        if (this.user.password.length < 8) {
          this.regErrors.push("Password must be at least 8 characters");
        } 
        if (this.user.password !== this.pwConfirm) {
          this.regErrors.push("Password confirmation must match password")
        }
      }
    
      validateEmail(email) {
        var re = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$/;
        if (!re.test(email)) {
          this.regErrors.push("Email must be in valid email format");
        }
      }

      registrationAttempt() {
        console.log("HIT REG ATTEMPT")
        console.log(this.todaysDate)
        console.log(typeof(this.todaysDate))

  
        // this.regErrors = [];
        // this.checkPassword();
        // this.validateEmail(this.user.email);
        // if (this.regErrors.length > 0) {
        //   this.user = new User;
        //   this.pwConfirm = '';
        // } else {
          console.log(this.user)
          this._userService.regAttempt(this.user)
            .then(data => {
              console.log("DATA RESPONSE COMING BACK FROM SERVER")
              console.log(data[0]['email'])
              if(data[0]['email']){
                this.regErrors.push("An account is already registered to this email")
              } else {
                  this.currUser = data[0];
                  let event = new MouseEvent('click', {bubbles: true});
                  this._renderer.invokeElementMethod(
                  this.fileInput.nativeElement, 'dispatchEvent', [event]
              )}
              // if (data.emailError) {
              //   this.regErrors.push(data.emailError);
              //   this.user = new User;
              //   this.pwConfirm = '';
              // } else {
              //   // this.currUser = data;
              //   this._router.navigateByUrl('/choose_topics');             
              // }
              this._router.navigateByUrl('/')
              
            })
            .catch(err => console.log(err));      
        
      }
   
      loginError = [];

      loginAttempt() {
        console.log("HIT LOGIN AT COMPONENT.TS")
        console.log(this.loginError);
        this._userService.loginAttempt(this.user)
          .then(data => {

            console.log("DATA COMING BACK FROM SERVER");
            console.log(data[0]['email']);
            console.log(data[0]['password']);
            console.log(this.loginError);
            
            if (data[0]['email']) {
              this.loginError.push("This email doesn't exist on our records.");
            }
            else if (data[0]['password']) {
              this.loginError.push("Password doesn't match records.");
            } else {
              this.currUser = data[0]['fields']; 
              this.currUser.id = data[0].pk;
              console.log(this.currUser);
              let event = new MouseEvent('click', {bubbles: true});
              this._renderer.invokeElementMethod(
                this.loginInput.nativeElement, 'dispatchEvent', [event]
              )}

            // Set currUser id to service
            console.log("in showUser in nav.comp")
            console.log(data[0])
            this._userService.setCurrUser(data[0].pk);
            this._router.navigateByUrl('');
          }).catch(err => console.log(err))
          // .then(resData => {
          //   if (resData.error) {
          //     this.loginError = resData.error;
          //   } else {
          //     // this.currUser = resData;
          //     this._router.navigateByUrl('');
          //   }
          // }).catch(err => console.log(err));
    
      }

      isLoggedIn() {
        if (this.currUser == null){
          return false;
        }
        return true;
      }

      // logout() {
      //   console.log("HIT LOGOUT AT COMPONENT")
      //   this._userService.logout(this.user)
      //     .then(data => {
      //       this._router.navigateByUrl('');
      //     }).catch(err => console.log(err))
      // }

      search(){
        this._propertyService.searchProperties(this.searchParams)
      }




    }
