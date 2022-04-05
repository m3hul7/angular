import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FileUploadPresenterService } from '../file-upload-presenter/file-upload-presenter.service';
import { MyFile } from '../file.model';

@Component({
  selector: 'app-file-upload-presentation',
  templateUrl: './file-upload-presentation.component.html',
  styleUrls: ['./file-upload-presentation.component.scss']
})
export class FileUploadPresentationComponent implements OnInit {

  public file: FileList;
  public startDate:string;
  public endDate:string;

  @Output() fileUpload:EventEmitter<MyFile>;

  constructor(private fileUploadPrensenter:FileUploadPresenterService, private cdr : ChangeDetectorRef) {
    this.fileUpload = new EventEmitter<MyFile>();
   }

  ngOnInit(): void {
    this.fileUploadPrensenter.fileUpload$.subscribe({
      next: (file) => {
        debugger
        this.fileUpload.emit(file);
      },
      error: (e) => { console.log(e) }
    })
  }

  readFile(files: any) {
    this.file = files.files;
  }

  uploadFile() {
    if (this.file) {
      this.fileUploadPrensenter.uploadFile(this.file)
      // console.log(this.file , "yo")
    }
    else {
      alert("No File is Selected")
    }
  }

  // readStartDate(input:any){
  //   this.startDate=input.target.value;
  // }

  // readEndDate(input:any){
  //   this.endDate=input.target.value;
  // }

}
