/** @odoo-module */

import { PosGlobalState } from 'point_of_sale.models';
import Registries from 'point_of_sale.Registries';

/*The outer arrow function acts as a higher-order function that takes PosGlobalState as a parameter
and returns another function, which happens to be a class declaration.*/
const PosButtonRestrict = (PosGlobalState) => class PosButtonRestrict extends PosGlobalState{
    async _processData(loadedData){
    await super._processData(...arguments);
    this.visible_backspace_button = loadedData['visible_backspace_button']
    }
}

Registries.Model.extend(PosGlobalState, PosButtonRestrict);