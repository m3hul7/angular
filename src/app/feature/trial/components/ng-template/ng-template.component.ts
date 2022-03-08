import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ng-template',
  templateUrl: './ng-template.component.html',
  styleUrls: ['./ng-template.component.scss']
})
export class NgTemplateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @ViewChild('templateRef')
  public templateref: TemplateRef<any>;

  ngAfterViewInit() {
    //console.log(this.templateref.elementRef)
}

ngAfterViewChecked() {
    console.log(this.templateref.elementRef)
}

ngAfterContentChecked() {
   // console.log(this.templateref.elementRef)
}

}
