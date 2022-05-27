import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { DataServicsService } from 'src/app/Servies/data-servics.service';

@Component({
  selector: 'app-lead-details',
  templateUrl: './lead-details.component.html',
  styleUrls: ['./lead-details.component.css']
})
export class LeadDetailsComponent implements OnInit {
  customers: any = [];
  loading: boolean = true;
  statuses: any = [];
  value = undefined;
  representatives:any = [];
  activityValues: number[] = [0, 100];
  constructor(
    private dataServies : DataServicsService,
    private messageService: MessageService, 
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit(): void {
    this.statuses = [
      {label: 'Unqualified', value: 'unqualified'},
      {label: 'Qualified', value: 'qualified'},
      {label: 'New', value: 'new'},
      {label: 'Negotiation', value: 'negotiation'},
      {label: 'Renewal', value: 'renewal'},
      {label: 'Proposal', value: 'proposal'}
          ]
  this.representatives = [
    {name: "Amy Elsner", image: 'amyelsner.png'},
    {name: "Anna Fali", image: 'annafali.png'},
    {name: "Asiya Javayant", image: 'asiyajavayant.png'},
    {name: "Bernardo Dominic", image: 'bernardodominic.png'},
    {name: "Elwin Sharvill", image: 'elwinsharvill.png'},
    {name: "Ioni Bowcher", image: 'ionibowcher.png'},
    {name: "Ivan Magalhaes",image: 'ivanmagalhaes.png'},
    {name: "Onyama Limba", image: 'onyamalimba.png'},
    {name: "Stephen Shaw", image: 'stephenshaw.png'},
    {name: "Xuxue Feng", image: 'xuxuefeng.png'}
       ];
this.getDataTable();

}

getDataTable(){
  // Get Table Data
  this.customers = [];
  this.dataServies.getData().then( data =>{
    console.log(data);
    this.customers = data;
    this.loading = false
  } )
}

clear(table: any) {
   
    table.clear();
}
deleteProduct(product: any) {
  // Delate A table Row
  this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + product.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          this.customers = this.customers.filter((val:any) => val.id !== product.id);
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Deleted', life: 3000});
      }
  });
}
  }


