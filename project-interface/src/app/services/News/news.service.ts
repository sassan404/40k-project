import { Injectable } from '@angular/core';
import { NewsList } from 'src/app/Data(temp)/news';
import { HomeComponent } from 'src/app/Components/Home/home.component';

@Injectable()
export class NewsService {

  constructor() { }
  getNews () {
    return NewsList;
  }
}
