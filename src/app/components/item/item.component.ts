import { Component, OnInit } from '@angular/core';
import { Item } from 'src/interfaces';

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

    name:string = ''
    price: number = 0
    quiantity: number = 0
    total: number = 0

    constructor() { }

    ngOnInit(): void {
    }

}
