import { Component } from '@angular/core';


@Component({
    selector: 'app-characters',
    templateUrl: 'character.component.html',
    styleUrls: ['character.component.css']
})

export class CharactersComponent {
    characters = [
        {
            name: `Apollo Diomedes`,
            position: `Captain`,
            afflaition: 'Blood Ravens',
            summary: `The Captain of the Blood Ravens Honor Guard.`
        }, {
            name: `Aramus`,
            summary: `Aramus is the canon name given to the Force Commander in Warhammer 40,000: Dawn of War II.
            He became Captain of the Blood Raven's 4th Company after the Aurelian Crusade.`
        }, {
            name: `Avitus`,
            summary: `Avitus is the heavy weapons Devastator squad leader of the Blood Ravens in Dawn of War 2.
            He is a Sergeant of the Blood Raven 4th Company.`
        }, {
            name: `Brother Captain Davian Thule`,
            summary: `The commander of the Blood Ravens deployment on Kronus,
            Captain Davian Thule led his forces to victory in Dawn of War: Dark Crusade, and later returns in Dawn of War 2.`
        }, {
            name: `Captain Titus`,
            summary: `Titus is the captain of the 2nd Company of the Ultramarines.
            He is a veteran of several major campaigns and has earned a reputation as one of the mightiest Ultramarines.`
        }, {
            name: `Carus Brom`,
            summary: `Colonel Carus Brom is the commanding officer of the Tartarus 37th Imperial Guard Regiment.
            He is joined by the Blood Ravens chapter of Space Marines to defend Tartarus from an Ork invasion.`
        }, {
            name: `Commissar Holt`,
            summary: `Imperial Commisar Holt is a character in the Warhammer 40k game Final Liberation.`
        }, {
            name: `Cyrus`,
            summary: `Cyrus leads his Blood Raven scouts into battle, both acting as the eyes for his brothers,
            and also infiltrating the foe for the pupose of sabotage and destruction.
            He is a Sergeant of the Blood Raven 10th Company.`
        }, {
            name: `Elena Derosa`,
            summary: `A character in Dawn of war II: Chaos Rising.`
        }, {
            name: `Eliphas the Inheritor`,
            summary: `The commander of the Chaos faction in Dawn of War: Dark Crusade.`
        }, {
            name: `Ezekyle Abaddon`,
            summary: `Warmaster of the Chaos Space Marines, previously First Captain,
            now leader of the Black Legion, successor to Primarch Warmaster Horus Lupercal.
            He is blessed by Chaos Undivided.`
        }, {
            name: `Farseer Macha`,
            summary: `Macha is an Eldar Farseer from the craftworld of Biel-Tan.
            he commands the Eldar forces in Dawn of War, and even briefly sides with Gabriel Angelos and his chapter of Space Marines.`
        }, {
            name: `Farseer Taldeer`,
            summary: `Commander of Eldar forces in Dawn of War: Winter Assault and Dawn of War: Dark Crusade.`
        }, {
            name: `Firaeveus Carron`,
            summary: `Commander of Chaos forces in the Kaurava system.
            Member of the Alpha Legion Chaos Space Marine chapter.
            Has a strong disliking for metal objects, especially metal boxes.`
        }, {
            name: `Force Commander Indrick Boreale`,
            summary: `Leader of the Blood Ravens forces throughout Soulstorm, the third expansion to Warhammer 40,000: Dawn of War.`
        }, {
            name: `Brother Captain Gabriel Angelos`,
            summary: `Gabriel Angelos is the Captain of the 3rd Company of the Blood Ravens chapter in Warhammer 40,000: Dawn of War.
            He is the central protagonist in the game's single player campaign.`
        }, {
            name: `General Sturnn`,
            summary: `Commander of the 412th Cadian Regiment.
            He leads an expedition to the planet Lorn V to capture an Imperial Dominatus Titan.
            A hard, determined man, he is willing to do whatever is necessary to accomplish his objective
            even going so far as to consort with xenos.`
        }, {
            name: `Inquisitor Drogan`,
            summary: `A radical inquisitor whose obsession with defending the Forge World
            led him to order the Forge World's scientists to open a portal,
            which brought about an invading Chaos warband.`
        }, {
            name: `Isador Akios`,
            summary: `Brother Librarian Isador Akios is the Librarian of the 3rd Company of the Blood Ravens chapter of Spce Marines.
            He is a character in the single player campaign in Warhammer 40,000: Dawn of War.`
        }, {
            name: `Jonah Orion`,
            summary: `A Librarian of the Blood Ravens.`
        }, {
            name: `Leandros`,
            summary: `Leandros is the most recent inductee to the Ultramarines command squad.
            He is a "by the book" Ultramarine, revealed by his overly formal speech and his enthusiasm to do things just right.`
        }, {
            name: `Lord Bale`,
            summary: `Lord Bale is a Chaos Lord of Alpha Legion.
            He commands the traitorous Chaos Space Marines in Warhammer 40,000: Dawn of War.`
        }, {
            name: `Lord Crull`,
            summary: `Chaos Lord of the World Eaters warband on the planet Lorn V.
            A raving psychopath who revels in bloodshed,
            he seeks the Imperial Titan for personal gain to appease the dark Chaos god Khorne and earn his favor.
            He meets his demise at the hands of the ork waaghboss Gorgutz and has his head mounted onto the spikes of his armor`
        }, {
            name: `Marneus Calgar`,
            summary: `Chapter Master of the Ultramarines space marine chapter.`
        }, {
            name: `Mira`,
            summary: `2nd Lieutenant Mira is one of the few surviving members of the 203rd Cadian Regiment on the Forge World Graia.
            She is forced to take command of the forces on the ground after her commanders were killed.`
        }, {
            name: `Mordecai Toth`,
            summary: `Inquisitor Mordecai Toth is a member of the Ordo Malleus branch of the Imperial Inquisition.
            He is sent to investigate the possibility of chaos taint on the planet Tartarus
            in the single player campaign of Warhammer 40,000: Dawn of War.`
        }, {
            name: `Nurgle`,
            summary: `Also called Grandfather Nurgle, as he seems to have a keen interest in his infected victims,
            Nurgle is the chaos god of disease and decay.
            He takes delight in creating new plagues and orchestrating them upon the struggling realm of Warhammer.`
        }, {
            name: `Orkamungus`,
            summary: `Warboss Orkamungus is da biggest and baddest Ork in his clan.
            He launches an Ork WAAGH on the Planet Tartarus to give da boyz a good fight.`
        }, {
            name: `Shas'O Or'es'Ka`,
            summary: `Shas'O Or'es'Ka is the commander of the Tau Fire Caste forces in the Kaurava System during Dawn of War: Soulstorm.
            He utilises a less common tactic among the Tau known as Great Strength, Great Strike.`
        }, {
            name: `Sidonus`,
            summary: `A veteran Ultramarine who serves as Captain Titus's Second-in-command.
            He is brutally efficient in combat and will stop at nothing until all enemies are dead at his feet.`
        }
    ];
}
