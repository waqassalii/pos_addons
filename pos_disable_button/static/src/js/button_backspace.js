/** @odoo-module **/

//import { NumpadWidget } from 'point_of_sale.widgets';
//
//const NumpadWidgetWithBackspaceRestriction = (NumpadWidget) => class extends NumpadWidget {
//console.log("hehahahhaahh=======================")
//    sendInput(value) {
//        // Check if the user belongs to the specified group (replace 'my_group_user' with the actual group name)
//        const isMyGroupUser = this.env.user.groups_id.includes(this.env.ref('your_module_name.my_group_user').id);
//
//        // If the user belongs to the specified group, do not perform the backspace action
//        if (isMyGroupUser && value === 'Backspace') {
//            return;
//        }
//
//        // Call the original sendInput method for non-restricted users or other input values
//        super.sendInput(...arguments);
//    }
//};
//
//export default NumpadWidgetWithBackspaceRestriction;