odoo.define("pos_light.OLSampleButton", function(require){
"use strict";
    // inherit or import the pos component
    const PosComponent = require("point_of_sale.PosComponent");
    //  as we are going to add button inside pos screen we need to import it
    const ProductScreen = require("point_of_sale.ProductScreen");
    // to register the template
    const Registries = require("point_of_sale.Registries");
    // import the library
    const { useListener } = require("@web/core/utils/hooks"); //note.2

    //create the custom class
    class OLSampleButton extends PosComponent{
            setup(){
            super.setup();
            useListener('click', this.ol_sample_button_click);
            } // note.1

            ol_sample_button_click(){
                console.log("Hello i am the click event ==============>>>>>>");
            }
    }
    //    create a template for button
        //associate template named "OLSampleButton" with a JavaScript class named OLSampleButton
       OLSampleButton.template = "OLSampleButton";

       ProductScreen.addControlButton({
       component: OLSampleButton,  // Specify the component (class) to be added
       position:["before", "OrderlineCustomerNoteButton"],
       });
    //note:
    //   I've specified component: OLSampleButton in the ProductScreen.addControlButton configuration
    // to indicate that instances of OLSampleButton should be added as a control button on the ProductScreen.
    // Xpath ...
    // addons/point_of_sale/static/src/xml/Screens/ProductScreen/ControlButtons
    //you would see 5 files means they are 5 buttons copy the t-name= "OrderlineCustomerNoteButton"

    // add class name  in registries
    Registries.Component.add(OLSampleButton);
    return OLSampleButton;

// ################# Errors ///////////////////////////////////////////////////////////////////////////
//OLSampleButton.template("OLSampleButton");  ==> TypeError OLSampleButton.template is not a function ##
//odoo.define("pos_light.OLSampleButton", function() ==> require is not define                        ##
//                                                                                                    ##
//                                                                                                    ##
//######################################################################################################
});