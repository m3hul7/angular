import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit {

  constructor() { }
  obs = new Observable((observer) => {
    console.log("Observable starts")
    observer.next("1")
    observer.next("2")
    observer.next("3")
    observer.next("4")
    observer.next("5")
  })

  ngOnInit(): void {
    this.obs.subscribe(
      val => { console.log(val) }, //next callback
      error => { console.log("error") }, //error callback
      () => { console.log("Completed") } //complete callback
    )
  }
  

}
