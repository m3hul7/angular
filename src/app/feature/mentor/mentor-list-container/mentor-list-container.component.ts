import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Mentor } from '../mentor.model';
import { MentorService } from '../mentor.service';

@Component({
  selector: 'app-mentor-list-container',
  templateUrl: './mentor-list-container.component.html',
  styleUrls: ['./mentor-list-container.component.scss']
})
export class MentorListContainerComponent implements OnInit {
  public mentorList$: Observable<Mentor[]>;

  constructor(
    private mentorService: MentorService
  ) {
    this.mentorList$ = new Observable();
   }

  ngOnInit(): void {
    this.getMentor();
  }
  delete(id: number) {
    this.mentorService.deleteMentor(id).subscribe((res: any) => {
      console.log(res);
      alert("delte from container")
      this.getMentor()
    });
  }
  public getMentor() {
    this.mentorList$ = this.mentorService.getMentor();
  }
}
