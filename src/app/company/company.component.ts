import { Component, OnInit } from '@angular/core';
import { ComponyListService } from '../compony-list.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
componys:any;
  constructor(private service : ComponyListService) { }

ngOnInit()
{
  let observableresult = this.service.getcompany();
  observableresult.subscribe((result)=>{
    console.log(result);
    this.componys = result;
  })
}
}
