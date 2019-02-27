export class News {
    news: string;
    date: Date;
    source: string;

    constructor(
        news: string,
        date?: Date,
        source?: string
    ) {
        this.news = news;
        this.date = date || new Date();
        this.source = source || 'unknown';
    }
}
