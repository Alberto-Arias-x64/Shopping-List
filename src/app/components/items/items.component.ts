import { Component, OnInit } from '@angular/core';
import { Item } from 'src/interfaces';

@Component({
	selector: 'app-items',
	templateUrl: './items.component.html',
	styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

	items: Item[] = []

	constructor() { }

	ngOnInit(): void {
		this.items = [
			{
				id: 0,
				title: 'pan',
				price: 200,
				quantity: 1,
				completed: false,
			},
			{
				id: 1,
				title: 'queso',
				price: 2000,
				quantity: 1,
				completed: false,
			},
		]
	}

}
