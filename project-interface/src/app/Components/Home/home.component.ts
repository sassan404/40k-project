import { Component, OnInit } from '@angular/core';
import { News } from '../../Classes/news';
import { NewsService } from 'src/app/services/News/news.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css'],
    providers: [NewsService]
})
export class HomeComponent implements OnInit {
    newsList: News[];
    constructor (private newsService: NewsService) { }
    getNews(): void {
        this.newsList = this.newsService.getNews();
    }
    ngOnInit() {
        this.getNews();
    }
}
