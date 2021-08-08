import { Component, OnInit, Type } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HttpclientService } from '../service/httpclient.service';
import { Client } from '../service/httpclient.service';
import{DialogComponent} from '../dialog/dialog.component';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})

export class ClientsComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'email', 'symbol', 'phone', 'added','setting'];
  dataSource:any=[];
  constructor(public dialog: MatDialog,private httClientService:HttpclientService) { }

  ngOnInit(): void {
    this.httClientService.getUser().subscribe(response => {   // data is of type HttpResponse<Object>
      this.dataSource=response.body;
      console.log(response)
  });

    //this.dataSource=this.httClientService.getUser();
    //console.log(this.dataSource);
  }


  openDialog():void{

    const dialogRef = this.dialog.open(DialogComponent, {
      width: '',
      data: {name: "name", phone: "this.animal",type:"New "}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
  
  }
  download(){

  }
  editFila(fila){
    console.log("edit"+fila);
    this.dataSource[fila.id] = fila;
  }

  updateClient(dataClient){
    this.httClientService.createUser(dataClient).subscribe(res => { 
      let client: Client = res;
      console.log(client);
      //console.log(res.headers.get('Content-Type'));		
    },
    err => {
      console.log(err);
    }
   );
  }


}




