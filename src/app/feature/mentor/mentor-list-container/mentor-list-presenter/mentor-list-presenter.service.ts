import { Injectable } from '@angular/core';
import { observable, Observable, Subject } from 'rxjs';

@Injectable()
export class MentorListPresenterService {
private delete: Subject<number>;
private delete$: Observable<number>;
  constructor() {
    this.delete = new Subject();
    this.delete$ = new Observable();
    this.delete$ = this.delete.asObservable();
   }
   public onDelete(id:number) {
     this.delete.next(id)
   }
}
