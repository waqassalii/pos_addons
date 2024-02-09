odoo.define("pos_light_popups.OLSampleButton", function(require){
"use strict";
    const PosComponent = require("point_of_sale.PosComponent");
    const ProductScreen = require("point_of_sale.ProductScreen");
    const Registries = require("point_of_sale.Registries");
    const { useListener } = require("@web/core/utils/hooks"); //note.2
    class OLSampleButton extends PosComponent{
            setup(){
            super.setup();
            useListener('click', this.ol_sample_button_click);
            }

           async ol_sample_button_click(){
//              this.showPopup('ErrorPopup', {
//                        title: "Error Error",
//                        body: "I am simple Error message",
//                    });


//              const { confirmed } = await this.showPopup('ConfirmPopup', {
//                        title: "Confirmation",
//                        body: "Are you sure ",
//                        confirmText:"Yes",
//                        cancelText:"No",
//                    });
//                console.log("Confirmation =====>>>", confirmed);
//                if (confirmed){
//                console.log("You said Yes=====>>>");
//                }else{
//                console.log("You saif No =====>>>");}

                // you can chose dont show again in this method
//              this.showPopup('OfflineErrorPopup', {
//                    title: "Gramer Error",
//                    body: "YOu put wrong spellings",
//                });

                    // in items you can pass any object
//                const {confirmed, payload: selectedOption} = await this.showPopup('SelectionPopup',{
//                 title: "Are you a Good person",
//                 list: [{'id':0,'label':'Yes', 'item':'You said Yes'},
//                         {'id':1,'label':'No', 'item':'You said No'},
//                         {'id':2,'label':'Not Sure', 'item':'You said Not Sure'}]
//                });
//                console.log("confirmed =====>>>",confirmed);
//                console.log("selectedOption =====>>>",selectedOption);

                    // Pos Close button Popup
                 const info = await this.env.pos.getClosePosInfo();
                 this.showPopup('ClosePosPopup', {
                    info: info ,
                    keepBehind: true,
                });

        }
    }
       OLSampleButton.template = "OLSampleButton";
       ProductScreen.addControlButton({
       component: OLSampleButton,
       position:["before", "OrderlineCustomerNoteButton"],
       });
    Registries.Component.add(OLSampleButton);
    return OLSampleButton;
});