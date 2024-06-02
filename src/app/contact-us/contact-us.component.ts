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
    document.getElementById('submit-button')?.classList.add('disabled')
    this.dataService.FirePOST<emailFields>(API.Email, this.emailFields).subscribe({
      error:(e) => alert('Error sending mail!' +e.message),
      complete:() => {
        document.getElementById('submit-button')?.classList.remove('disabled')
        alert('Mail sent successfully!')
        location.reload();
        Object.assign({}, this.emailFields)
      }
    })
  }

}
