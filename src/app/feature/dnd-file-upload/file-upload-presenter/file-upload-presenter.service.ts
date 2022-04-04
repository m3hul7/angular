import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { MyFile } from '../file.model';

@Injectable({
  providedIn: 'root'
})
export class FileUploadPresenterService {

  private file:MyFile;
  private fileUpload:Subject<MyFile>;
  public fileUpload$:Observable<MyFile>;

  constructor() { 
    this.file={} as MyFile;
    this.fileUpload=new Subject<MyFile>();
    this.fileUpload$=new Observable<MyFile>();
    this.fileUpload$=this.fileUpload.asObservable();
  }

  uploadFile(file:File){
    let size=Math.round(file.size/1024/1024)
    console.log(file);
    this.file.name=file.name;
      this.file.size=size;
      this.file.type=file.type;
      // file reader to read file content
      const reader = new FileReader();
      // read as url to get based64 type data
      reader.readAsDataURL(file);
      reader.onload=(event)=>{
        this.file.content=event.target?.result as string
        this.fileUpload.next(this.file);
      }
    // if(size<=5 ){
      
      
    //   }
    
    // else if(file.type!="image/jpeg"){
    //   alert("Please upload proper format");
    // }
    // else{
    //   alert("File Size is greater than 2MB");
    // }
  }
}
