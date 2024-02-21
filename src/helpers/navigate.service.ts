import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigateService {

  constructor() { }
  
  private subject = new BehaviorSubject<any>(null);
  sendPage(e: any) {
    this.subject.next(e);
    
  }
  getClickEvent(): Observable<any>{ 
    return this.subject.asObservable();
  }

}
