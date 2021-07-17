import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
declare var $:any;



@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  @ViewChild('dataTable',{static: true})table;
  dataTable: any;
  dtOption: any ;

  constructor() { }

  ngOnInit(): void {
    this.dtOption = {
      "paging":   true,
      "ordering": true,
      "info":     true
  };
    this.dataTable = $(this.table.nativeElement);
    this.dataTable.DataTable(this.dtOption);
    $(()=>{  
      $('table.display').DataTable(this.dtOption);
      });

  }

}
