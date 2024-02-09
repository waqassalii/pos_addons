# -*- coding: utf-8 -*-
{
    'name': 'POS Light Popups',
    'version': '16.0.1.1.0',
    'category': 'Point Of Sale',
    'summary': """this module contains customisation of POS""",
    'description': """this module contains customisation of POS""",
    'author': 'OdooLights',
    'company': 'OdooLights',
    'maintainer': 'OdooLights',
    'website': 'odoolights',
    'depends': ['point_of_sale'],
    'data': [],
    'assets': {
        'point_of_sale.assets': [
            'pos_light_popups/static/src/js/light_sample_button.js',
            'pos_light_popups/static/src/xml/light_sample_button.xml'
        ]
    },
    'installable': True,
    'auto_install': False,
    'application': False,
}
