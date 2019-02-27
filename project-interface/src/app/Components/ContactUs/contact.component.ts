import { Component, OnInit, OnDestroy } from '@angular/core';
import { EventManagerPlugin } from '@angular/platform-browser/src/dom/events/event_manager';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-contact',
    templateUrl: 'contact.component.html',
    styleUrls: ['contact.component.css']
})

export class ContactComponent implements OnInit, OnDestroy {
    active: boolean;
    submitAll = function(name: HTMLInputElement, email: HTMLInputElement, subject: HTMLInputElement) {
        name.value = email.value = subject.value = '';
        this.active = false;
    };
    checkActivity = function(name: string, email: string, subject: string) {
        this.active = name && email && subject;
    };
    ngOnInit() { console.log('init'); }
    ngOnDestroy() { console.log('dest'); }
}
