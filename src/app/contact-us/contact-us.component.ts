import { Component, OnInit } from '@angular/core';
import { API } from 'src/helpers/api';
import { DataService } from 'src/helpers/data.service';
import { emailFields } from 'src/helpers/interfaces';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  emailFields: emailFields = {} as emailFields

  constructor(
    private dataService:DataService,
  ) { }

  ngOnInit(): void {
  }

  send(){
    console.log(this.emailFields);
    console.log(typeof(this.emailFields.name,this.emailFields.company,this.emailFields.email,this.emailFields.requirements));
    
    this.dataService.FirePOST<emailFields>(API.Email, this.emailFields).subscribe({
      error:(e) => console.log(e),
      complete:() => {
        console.log('complete')
        location.reload();
        Object.assign({}, this.emailFields)
      }
    })
  }

}
