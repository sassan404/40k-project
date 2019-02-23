export class Location {
    name: string;
    type: string;
    image: string;
    constructor(
        name: string,
        type?: string
    ) {
        this.name = name;
        this.type = type || 'unknown';
        this.image = '../../assets/images/locations/' + name + '.jpg';
    }
}
