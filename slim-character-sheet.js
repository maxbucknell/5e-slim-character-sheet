import OriginalCharacterSheet from "../../systems/dnd5e/module/actor/sheets/character.js"

export class SlimCharacterSheet extends OriginalCharacterSheet {
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ['dnd5e', 'sheet', 'actor', 'character', 'slim'],
            height: 200
        })
    }

    get template() {
        if ( !game.user.isGM && this.actor.limited ) {
            return "systems/dnd5e/templates/actors/limited-sheet.html"
        }

        return 'modules/slim-character-sheet-5e/template/slim-character-sheet.html'
    }
}

Actors.registerSheet("dnd5e", SlimCharacterSheet, {
    types: ["character"],
    makeDefault: false
})
