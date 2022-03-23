import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Mentor } from '../../mentor.model';
import { MentorListPresenterService } from '../mentor-list-presenter/mentor-list-presenter.service';

@Component({
  selector: 'app-mentor-list-presentation',
  templateUrl: './mentor-list-presentation.component.html',
  styleUrls: ['./mentor-list-presentation.component.scss'],
  viewProviders:[MentorListPresenterService],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class MentorListPresentationComponent implements OnInit {
 @Input() public set mentorList(value: Mentor[] | null) {
   if (value) {
     console.log(value);
     
     this._mentorList = value;
   }
 }
 public get mentorList() : Mentor[] | null {
   return this._mentorList
 }

 @Output() public delete: EventEmitter<number>;
 private _mentorList!: Mentor[];

  constructor(
    private mentorListPresenter: MentorListPresenterService,
    private router: Router
  ) { 
    this.delete = new EventEmitter()
  }

  ngOnInit(): void {
    
  }
  onDelete(id: number) {
    // alert("Delete Success")
    this.mentorListPresenter.onDelete(id);
    this.delete.emit(id);
    this.mentorList
  }

  onEdit(id: number) {
    this.router.navigateByUrl(`mentor/edit/${id}`);
  }
}
