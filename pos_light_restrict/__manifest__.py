# -*- coding: utf-8 -*-
{
    'name': 'POS Lights Restrictions',
    'version': '16.0.1.1.0',
    'category': 'Point Of Sale',
    'summary': """this module contains customisation of POS""",
    'description': """this module contains customisation of POS""",
    'author': 'OdooLights',
    'company': 'OdooLights',
    'maintainer': 'OdooLights',
    'website': 'odoolights',
    'depends': ['point_of_sale'],
    'data': [
        "views/pos_config.xml"
    ],
    'assets': {
        'point_of_sale.assets': [
            'pos_light_restrict/static/src/js/pos_button_hide.js',
            'pos_light_restrict/static/src/xml/pos_button_hide.xml'
        ]
    },
    'installable': True,
    'auto_install': False,
    'application': False,
}
