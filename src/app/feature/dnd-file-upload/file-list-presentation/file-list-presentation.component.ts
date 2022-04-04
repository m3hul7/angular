import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FileListPresenterService } from '../file-list-presenter/file-list-presenter.service';
import { MyFile } from '../file.model';

@Component({
  selector: 'app-file-list-presentation',
  templateUrl: './file-list-presentation.component.html',
  styleUrls: ['./file-list-presentation.component.scss']
})
export class FileListPresentationComponent implements OnInit {

  

  @Input() public set fileList(value: MyFile[] | null) {
    if (value) {
      this._fileList = value;
    }
  }
  public get fileList(): MyFile[] {
    return this._fileList;
  }

  private _fileList: MyFile[];

  @Output() public delete: EventEmitter<number>;
  
  constructor(
    public listpresenter: FileListPresenterService
  ) { 
    this.delete = new EventEmitter()
  }

  ngOnInit(): void {
    this.listpresenter.delete$.subscribe((res)=>
    {
      this.delete.emit(res)
    })
  }
  
  onDelete(id: number) {
   this.listpresenter.onDelete(id)
  }

  public viewFile(content:string, type: string){
    this.listpresenter.showFile(content, type);
  }

}
