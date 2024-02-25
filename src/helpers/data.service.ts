import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import {
    article,
    project
} from './interfaces';

const HOST = environment.HOST;

const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
@Injectable()
export class DataService {

    constructor(
        private http: HttpClient,
        public router: Router,
    ){}

    public article: article[] = [] as article[];
    public project: project[] = [] as project[];

    FireGET<T>(uri:string):Observable<T>{
        return this.http.get<T>(HOST+uri)
    }
    FireGETP<T>(uri:string, params:any):Observable<T>{
        return this.http.get<T>(HOST+uri,{params})
    }
    FirePOST<T>(uri:string, body:any):Observable<T>{
        return this.http.post<T>(HOST+uri,body, {headers:headers})
    }
}