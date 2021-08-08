import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from '../../environments/environment';
export interface Client {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  phone: string;
  added: string;
  setting: string;
}

@Injectable({
  providedIn: 'root'
})
export class HttpclientService {
  dataSourceAll:Client[]=[
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', phone: 'H', added: '2020/12/08', setting: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'H', phone: 'He', added: '2020/12/08', setting: 'H'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'H', phone: 'Li', added: '2020/12/08', setting: 'H'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'H', phone: 'Be', added: '2020/12/08', setting: 'H'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'H', phone: 'B', added: '2020/12/08', setting: 'H'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'H', phone: 'C', added: '2020/12/08', setting: 'H'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'H', phone: 'N', added: '2020/12/08', setting: 'H'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'H', phone: 'O', added: '2020/12/08', setting: 'H'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'H', phone: 'F', added: '2020/12/08', setting: 'H'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'H', phone: 'Ne', added: '2020/12/08', setting: 'H'},
  ];
  constructor(private httpClient: HttpClient) { }

  getUser() {

    //return this.dataSourceAll;
    return this.httpClient.get(environment.apiUrl+"/client", {observe: 'response'});
    //return this.httpClient.get<Client[]>(environment.apiUrl+"/client");
  }


  public deleteUser(client) {
    return this.httpClient.delete<Client>(
      environment.apiUrl + "/" + client.empId
    );
  }

  public createUser(client) {
    return this.httpClient.post<Client>(
      environment.apiUrl,
      client
    );
  }
}
