import { Component } from '@angular/core';

@Component({
    selector: 'app-contact',
    templateUrl: 'contact.component.html',
    styleUrls: ['contact.component.css']
})

export class ContactComponent {
submitAll = function() {
    for (const element of (<any>event).path[2].getElementsByClassName('input')) {
        element.value = '';
    }
};
}
