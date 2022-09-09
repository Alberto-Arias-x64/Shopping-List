import { Component, OnInit } from '@angular/core';
import { Item } from 'src/interfaces';

import { ItemService } from '../../services/item.service'

@Component({
	selector: 'app-items',
	templateUrl: './items.component.html',
	styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

	items: Item[] = []

	constructor(private itemService: ItemService) { 
    }

	ngOnInit(): void {
		this.items = this.itemService.get_items()
	}
    delete(item:Item){
        this.items = this.items.filter(element => element.id !== item.id)
    }

}
