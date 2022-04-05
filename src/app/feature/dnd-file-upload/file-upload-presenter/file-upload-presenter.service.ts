import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { MyFile } from '../file.model';

@Injectable({
  providedIn: 'root'
})
export class FileUploadPresenterService {

  // private files:MyFile;
  private fileUpload:Subject<MyFile>;
  public fileUpload$:Observable<MyFile>;

  constructor() { 
    
    
    this.fileUpload=new Subject<MyFile>();
    this.fileUpload$=new Observable<MyFile>();
    this.fileUpload$=this.fileUpload.asObservable();
  }

  uploadFile(file:FileList){
    
    
    console.log(file);
  
    for(let i = 0; i< file.length; i++) {
      const files:MyFile={} as MyFile;
      console.log(file[i], " file one two" , i)
      let size=Math.round(file[i].size/1024/1024)
      if(size<=2 ){
        // debugger
        
        // file reader to read file content
        const reader = new FileReader();
        // read as url to get based64 type data
        reader.readAsDataURL(file[i]);
        reader.onload=(event)=>{
        files.name=file[i].name;
        // console.log(files.name);
        
        files.size=size * 1024 * 1024;
        files.type=file[i].type;
          files.content=event.target?.result as string;
          console.log(files, "yo")
          this.fileUpload.next(files);
        }
      }
      
      else if(file[i].type!="image/jpeg"){
        alert("Please upload proper format");
      }
      else{
        alert("File Size is greater than 2MB");
      }
    }
  }
}
