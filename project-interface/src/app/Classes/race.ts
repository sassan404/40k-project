export class Race {
    name: string;
    age: string;

    constructor(
        name: string,
        age?: string
    ) {
        this.name = name;
        this.age = age || 'unknown';
    }
}

