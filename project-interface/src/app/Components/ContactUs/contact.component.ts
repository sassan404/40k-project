import { Component, OnInit, OnDestroy } from '@angular/core';
import { EventManagerPlugin } from '@angular/platform-browser/src/dom/events/event_manager';
import { Subject } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'app-contact',
    templateUrl: 'contact.component.html',
    styleUrls: ['contact.component.css']
})

export class ContactComponent implements OnInit, OnDestroy {
    active: boolean;
    contactForm: FormGroup = new FormGroup({
        Name: new FormControl(),
        Email: new FormControl(),
        Subject: new FormControl(),
    });
    submitAll = function() {
        console.log(this.contactForm.value);
        this.contactForm.patchValue({
            Name: '',
            Email: '',
            Subject: ''
        });
        this.checkActivity();
    };
    checkActivity = function() {
        this.active = this.contactForm.value.Name && this.contactForm.value.Email && this.contactForm.value.Subject;
    };
    ngOnInit() {
    }
    ngOnDestroy() {
    }
}
