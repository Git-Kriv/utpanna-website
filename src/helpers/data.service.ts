import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import {
    article,
    project
} from './interfaces';
const HOST = 'http://192.168.0.104:8000/';

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
}