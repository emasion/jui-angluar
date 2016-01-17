/**
 * Created by emasion on 2016-01-17.
 */

import {Component, View, ViewEncapsulation, OnChanges} from 'angular2/core';
import {ElementRef} from "angular2/core";
import {Vendor} from '../../vendor';

@Component({
    selector: 'jui-button, [jui-button]',
    //templateUrl: 'src/components/button/button.html',
    //styleUrls: ['src/components/button/button.css'],
    host: {
        '(mousedown)': 'onMousedown($event)',
    },
    providers: [],
    directives: [],
    pipes: []
})
@View({
    //templateUrl: 'src/components/button/button.html',
    //encapsulation: ViewEncapsulation.None,
})
export class JuiButton {
    juiObj: Object;
    constructor(private _element: ElementRef) {
        // jui create
        this.juiObj = new Vendor.JuiObject('ui.button', this._element);
    }
    onMousedown(event) {
        console.log(event, this._element);
    }
}


