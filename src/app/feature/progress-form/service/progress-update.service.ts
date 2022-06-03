import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgressUpdateService {

  public $progressbool = new Subject();

  constructor() {
    this.$progressbool.subscribe(val => {
      console.log(val , " ", "from service");
    });
   }

  
}
