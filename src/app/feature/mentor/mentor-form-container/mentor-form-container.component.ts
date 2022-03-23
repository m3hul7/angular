import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { observable, Observable } from 'rxjs';
import { Mentor, MentorForm } from '../mentor.model';
import { MentorService } from '../mentor.service';

@Component({
  selector: 'app-mentor-form-container',
  templateUrl: './mentor-form-container.component.html',
  styleUrls: ['./mentor-form-container.component.scss']
})
export class MentorFormContainerComponent implements OnInit {

  public id!:string
  public mentorData$: Observable<Mentor>
  constructor(
    private mentorService: MentorService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { 
    this.mentorData$ = new Observable();
    console.log(this.activatedRoute)
    this.id = this.activatedRoute.snapshot.params['id'];
    console.log(this.id);
    if (this.id) {
      this.mentorData$ = this.mentorService.getMentorById(this.id);
    }
  }

  ngOnInit(): void {
  }
  addMentor(form: Mentor) {
    console.log(form);
    // debugger
      this.mentorService.addMentor(form).subscribe((res:Mentor) => {
      alert('Post Success')
      this.router.navigateByUrl('mentor/list')
    });
  }
  editMentor(mentorForm: MentorForm) {
    this.mentorService.editMentor(mentorForm, this.id).subscribe((res:any) => {
      alert('Edit Success')
      this.router.navigateByUrl('mentor/list')
    })
  }
}
