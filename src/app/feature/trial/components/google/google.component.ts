import { Component, OnInit } from '@angular/core';
import { ChartType } from 'angular-google-charts';
import { Chart } from '../google-chart/charts.model';
import { ChartColumnService } from './chart-column.service';

@Component({
  selector: 'app-google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.scss']
})
export class GoogleComponent implements OnInit {

  constructor(private chartService:ChartColumnService) { }

  ngOnInit(): void {
  }

  public type = ChartType.ColumnChart;
  public data = [
    ["Mon", 6],
    ["Tue", 10],
    ["Wed", 1],
    ["Thu", 3],
    ["Fri", 5],
    ["Sat", 2],
    ["Sun", 1],
  ];
  width = 550;
  height = 500;

  // public columnData: Chart[];

  // getChartData() {
  //   this.chartService.getColumn().subscribe(data => {
  //     console.log(data)
  //     this.columnData = data;
  //     // this.method(data);
  //   })
  // }
  
  public data2 = [
    ['avg', 3],
    ['avg', 9]
  ]

  //  dynamic data
  // method(temp: Chart[]) {
  //   /**
  //    * @forEach loop
  //    */
  //   //  let iterator = 0;
  //   //   this.columnData.forEach( (i) => {
  //   //   this.data[iterator][1] = i.patient;
  //   //   console.log(this.data[iterator][1]);
  //   //   iterator++;
  //   // });

  //   /**
  //    * @for...of loop
  //    */
  //    let p = 0;
  //    for (const i of temp) {
  //     //  if(this.data[p][0]==i.day){
  //       //  console.log(this.data[p][0]===i.day, " ",this.data[p][0], " ", i.day);
  //        this.data[p][0] = i.day;
  //        this.data[p][1] = i.patient;
  //       //  this.cRef.detectChanges();
  //     //  }
  //     //  else{
  //       //  this.data[p][1] = 0;
  //     //  }
  //      // console.log(this.data[p][1]);
  //      p++;
       
  //    }
  //    console.log(this.data)

  //   // return newtempData;
  //   /**
  //    * @for loop
  //    */
  //   //  for(let i =0 ; i<= this.columnData.length; i++) {
  //   //   //  console.log(this.columnData[i].patient);
  //   //    this.data[i][1]=this.columnData[i].patient;
  //   //   //  console.log(this.data[i][1])
  //   //  }
  // }

  // columnNames = ['Year', 'Asia'];
  // //  backgroundColor: {color: 'red'};	

  // options = {
  //   legend: 'none',
  //   bar: {groupWidth: "20"},
    
  //   vAxis: {
  //     /**
  //      * @remove : minor gridlines
  //      */
  //     minorGridlines: { count: 0 },
  //     gridlines: {
  //         // color: 'none'
          
  //         lineStyle: "dashed",
  //     },
      
  //   },
  //   series:{
  //     0: { lineDashStyle: [2, 2] },
  //   },
  //   colors: ['#7fb4be']
  //   // chartArea: { width: '100%', height: '100%' },
  // };

  

  // //  select this week or lasst week
  // public selected: number;
  // public tempColumnData: Chart[];
  // public tempData: Chart[];

  // update(e: any) {
  //   this.selected = e.target.value
  //   this.tempColumnData = this.columnData;

  //   if (this.selected == 1) {
  //     this.tempData = this.tempColumnData.slice(0, 7)
  //     this.method(this.tempData)
     
  //     //  console.log(this.tempColumnData.slice(0,7));
  //   }
  //   else {
  //     this.tempData = this.tempColumnData.slice(7)
  //     this.method(this.tempData);
  //     // this.cRef.detectChanges();
  //     // console.log(this.tempColumnData.slice(7));
  //   }
  // }

}
