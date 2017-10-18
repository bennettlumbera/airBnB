import { Injectable } from '@angular/core';

@Injectable()
export class PropertyService {

  constructor() { }

  searchProperties(searchParams){
    console.log(searchParams)
  }

}
