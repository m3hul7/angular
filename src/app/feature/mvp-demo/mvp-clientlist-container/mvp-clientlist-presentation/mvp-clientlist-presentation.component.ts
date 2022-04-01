import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { mvpclient } from '../../mvp-demo-model';
import { MvpClientlistPresenterService } from '../mvp-clientlist-presenter/mvp-clientlist-presenter.service';
import { FilterListPresentationComponent } from './filter-list-presentation/filter-list-presentation.component';

@Component({
  selector: 'app-mvp-clientlist-presentation',
  templateUrl: './mvp-clientlist-presentation.component.html',
  styleUrls: ['./mvp-clientlist-presentation.component.scss']
})
export class MvpClientlistPresentationComponent implements OnInit {
  filteredData: mvpclient;
  @Input() public set mvpclientlist(value: mvpclient[] | null) {
    if (value) {
      this._mvpList = value;
      this.newList = value
    }
  }
  public get mvpclientlist(): mvpclient[] {
    return this._mvpList;
  }
  @Output() public delete: EventEmitter<number>;
  constructor(private mvpPresenter: MvpClientlistPresenterService, private router: Router, private overlay: Overlay,private cdr:ChangeDetectorRef) {
    this.delete = new EventEmitter();
 
  }
  public newList : mvpclient[];
  private _mvpList: mvpclient[];
  public _mvpclientlist: mvpclient[];
  ngOnInit(): void {
    this.mvpPresenter.delete$.subscribe
      ((res: number) => this.delete.emit(res))
      this.cdr.detectChanges();
  }
  onDelete(id: number) {
    this.mvpPresenter.ondelete(id);
  }
  onEdit(id: number){
    this.router.navigateByUrl(`mvp/edit/${id}`)
  }
  filter(){
    this._mvpList = this.newList
    this.openOverlay();
  }
  openOverlay(){
    const overlayref = this.overlay.create({
      hasBackdrop: true,
      positionStrategy: this.overlay
      .position()
      .global()
      .centerHorizontally()
      .right()
    });

    const component = new ComponentPortal(FilterListPresentationComponent);
    const componentRef = overlayref.attach(component);

    componentRef.instance.filter.subscribe((filterRes)=>{
      this.filterData(filterRes)
      overlayref.detach();
    });
    componentRef.instance.close.subscribe(()=>{
      overlayref.detach();
    });
  }

  filterData(filters:any){
    if(!(filters.age === "")) {
      this._mvpList = this._mvpList.filter((item)=>{
        return item.age == filters.age
       })
    }
    if (!(filters.name === "")) {
      this._mvpList = this._mvpList.filter((item) => {
        // return item.name.toLowerCase().match(filters.name.toLowerCase())
        return item.name == filters.name 
      })
    }
    if (!(filters.gender === "")) {
      this._mvpList = this._mvpList.filter((item)=>{
        return item.gender == filters.gender
      })
    }
  }


  changePage(userList: mvpclient[]) {    
    this.newList = userList;
    this.cdr.detectChanges();
     console.log(this.newList);
  } 

}
