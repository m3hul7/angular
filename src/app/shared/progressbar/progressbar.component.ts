import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { ProgressUpdateService } from 'src/app/feature/progress-form/service/progress-update.service';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.scss']
})
export class ProgressbarComponent implements OnInit {

  @ViewChild('hello', { static: false }) divHello: ElementRef;

  constructor(private _bool: ProgressUpdateService , private _el:ElementRef) { 
    
  }

  ngOnInit(): void {
    this._bool.$progressbool.subscribe((val)=> {
      console.log(val, " " , "from shared")
      this.divHello.nativeElement.value = `${val}`;
    })
  }


}
