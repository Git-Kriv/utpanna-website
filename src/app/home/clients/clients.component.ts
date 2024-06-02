import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { API } from 'src/helpers/api';
import { DataService } from 'src/helpers/data.service';
import { client } from 'src/helpers/interfaces';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clientList1:client[] = [] as client[];
  clientList2:client[] = [] as client[];
  
  HOST = environment.HOST;

  constructor(
    private dataService: DataService,
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.dataService.FireGET<client[]>(API.Clients).subscribe({
      next:(res) => {
        for (let i = 0; i < res.length; i++) {
          const ele = res[i];
          ele.image = this.HOST + ele.image;
          if (i % 2 == 0) this.clientList1.push(ele);
          else this.clientList2.push(ele);
        }
      },
    })
  }

}
