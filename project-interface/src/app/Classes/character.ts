export class Character {
    public name: string;
    public title: string;
    public affiliation: string;
    public summary: string;
    public birth: Date;
    constructor (
        name: string,
        title?: string,
        affiliation?: string,
        summary?: string,
        birth?: Date
    ) {
        this.name = name;
        this.title = title || null;
        this.affiliation = affiliation || null;
        this.summary = summary || null;
        this.birth = birth || null;
    }
}
