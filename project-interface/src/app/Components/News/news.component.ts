import { Component, Input, OnInit } from '@angular/core';
import { News } from 'src/app/Classes/news';


@Component({
selector: 'app-news',
templateUrl: 'news.component.html',
styleUrls: ['news.component.css']
})

export class NewsComponent implements OnInit {
    @Input() news: News;
    ngOnInit () {
    }
}
