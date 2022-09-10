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
    total: number = 0

	constructor(private itemService: ItemService) { 
    }

	ngOnInit(): void {
		this.items = this.itemService.getItems()
        this.getTotal()
        fetch('http://localhost:3000')
	}
    delete(item:Item){
        this.items = this.items.filter(element => element.id !== item.id)
    }
    getTotal(){
        this.total = this.items.filter(element => element.completed === false).map(element => element.quantity * element.price).reduce((acc,item)=> acc += item,0)
    }

}
