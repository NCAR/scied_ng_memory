import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WebappService {

  constructor(private location: Location, private router: Router, private http: HttpClient) { }
  pageTitle:string = "";
  baseUrl:string = "/";
  backUrl:string = "/";
  showFooter:boolean = false;
  showBackButton:boolean = false;
  showHomeButton: boolean = false;
  returnOnIdle: boolean = false;

  getData(url): Observable<any[]> {
    return this.http.get<any[]>(url)
  }

  goToPage(path){
    this.router.navigateByUrl(path);
  }

  goBack(): void{
    this.goToPage(this.backUrl);
  }
  goHome(): void {
    this.goToPage(this.baseUrl);
  }
  setReturnOnIdle(val){
    this.returnOnIdle = val;
  }
  getReturnOnIdle(){
    return this.returnOnIdle;
  }

  setPageTitle(val){
    this.pageTitle = val;
  }
  getPageTitle(){
    return this.pageTitle;
  }

  setBaseUrl(val){
    this.baseUrl = val;
  }
  getBaseUrl(){
    return this.baseUrl;
  }
  setBackUrl(val){
    this.backUrl = val;
  }
  getBackUrl(){
    return this.backUrl;
  }

  setShowFooter(val){
    this.showFooter = val;
  }
  getShowFooter(){
    return this.showFooter;
  }

  setBackButton(val){
    this.showBackButton = val;
  }
  getBackButton(){
    return this.showBackButton;
  }

  setHomeButton(val){
    this.showHomeButton = val;
  }
  getHomeButton(){
    return this.showHomeButton;
  }


}
