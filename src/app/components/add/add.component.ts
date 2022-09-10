import { Component, OnInit } from '@angular/core';
import { Data } from 'src/interfaces';

import { ItemService } from 'src/app/services/item.service';

@Component({
    selector: 'app-add',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

    data: Data = {
        title: '',
        price: NaN,
        quantity: NaN
    }

    constructor(private itemService: ItemService) { }

    ngOnInit(): void {
    }

    on_submit(){
        this.itemService.setItem(this.data)
    }
}
