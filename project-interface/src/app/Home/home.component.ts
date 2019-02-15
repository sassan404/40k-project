import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']
})

export class HomeComponent {
    newsList = [
        'Cadia Stands',
        'For The Emperor',
        'Guilliman is Back',
        'The planet fell before the guard',
        'I appreciate that a chaos cult can seem exciting' +
        'and romantic when you’re young, but the reality' +
        'is if you want short-lived excitement the' +
        'Imperial Guard is for you',
        'FETH YOU TANITH PEASANT!',
        'Cleanse... purge... kill !!!',
        'And they shall know no fear.',
        'Be aware of the alien, mutant, and heretic.',
        'In an age of darkness look to the blind to lead the way',
        `"Keikaku, mon'keighfucker, do you grasp it?"Some Farseer, probably`,
        `The most technologically advanced weapon in the galaxy won't save you when someone is dashing your brains out with a rock`,
        `"From the outer Void we come!" "Darkness there, and nothing more" Carcharodons in the rare time they speak`,
        `AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA - Sly Marbo`,
        `Metal boxes! Our enemies hide in metal boxes the cowards! we should take away their metal boxes!"-Firaeveus Carron`,
        `All is dust`,
        `Hope is the first step on the road to disappointment`,
        `Blessed is the mind too small for doubt`,
        `"If you truly do hail from the realm that men once called hell,
        when you return there, tell your kindred it was Sanguinius who threw you back." Sanguinius, primarch of the Blood Angels`,
        `In the Emperor Light we shall prevail!`,
        `“Perturabo is a dick”-Rogal Dorn (probably)`
    ];
}
