# -*- coding: utf-8 -*-

from odoo import models, fields, api


class POSConfig(models.Model):
    _inherit = 'pos.config'

    visible_backspace_button = fields.Boolean('Visible BackSpace Button', default=True)


class PosSession(models.Model):
    _inherit = 'pos.session'

    def _pos_data_process(self, loaded_data):
        super()._pos_data_process(loaded_data)
        loaded_data['visible_backspace_button'] = self.config_id.visible_backspace_button

