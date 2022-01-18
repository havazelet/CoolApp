import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  constructor(private _servies:HttpService) { }

  displayNews:any = [];

  ngOnInit(): void {
    this._servies.topHeading().subscribe((result)=>{
      console.log(result)
      this.displayNews = result.articles;
      
    })
  }

}
