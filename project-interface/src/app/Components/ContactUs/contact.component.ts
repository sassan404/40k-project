import { Component } from '@angular/core';
import { EventManagerPlugin } from '@angular/platform-browser/src/dom/events/event_manager';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-contact',
    templateUrl: 'contact.component.html',
    styleUrls: ['contact.component.css']
})

export class ContactComponent {
    active: boolean;
    // active = name.value && email.value && subject.value;
    submitAll = function() {
        for (const element of (<any>event).path[1].getElementsByClassName('input')) {
            element.value = '';
        }
        this.active = false;
    };
    checkActivity = function(name: HTMLInputElement, email: HTMLInputElement, subject: HTMLInputElement) {
        this.active = name.value && email.value && subject.value;
    };
}
