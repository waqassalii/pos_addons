# -*- coding: utf-8 -*-
{
    'name': 'POS button Disable',
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
            'pos_disable_button/static/src/js/button_backspace.js',
        ]
    },
    'installable': True,
    'auto_install': False,
    'application': False,
}
