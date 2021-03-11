import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';


@Injectable({
  providedIn: 'root'
})
export class MockWebappService {

  constructor() { }
  pageTitle:string = "";
  baseUrl:string = "/";
  backUrl:string = "/";
  showFooter:boolean = false;
  showBackButton:boolean = false;
  showHomeButton: boolean = false;
  returnOnIdle: boolean = false;

  getData(url): Observable<any[]> {
    return of([]);
  }

  goToPage(path){

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
  setBackUrl(val){
    this.backUrl = val;
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
