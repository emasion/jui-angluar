/**
 * Created by emasion on 2016-01-17.
 */
// TODO: vendor �� component �ڵ带 ������ �� �и� �ؾ���.
import {ElementRef} from 'angular2/core';

export module Vendor {
    var jui = require('jui/dist/ui');
    export class JuiObject {
        constructor(private _name: String, private _element: ElementRef) {
            // jui create
            return jui.create(this._name, this._element)
        }
    }
}