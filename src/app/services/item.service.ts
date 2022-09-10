import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Data, Item } from 'src/interfaces';

@Injectable({
    providedIn: 'root'
})
export class ItemService {

    counter:number = 3
    items:Item[] = [
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
        {
            id: 2,
            title: 'leche',
            price: 3000,
            quantity: 2,
            completed: true,
        },
    ]

    constructor(private router:Router) { }

    getItems() {
        return this.items
    }
    setItem(item: Data):void {
        this.items.push({
            ...item,
            id:this.counter,
            completed: false
        })
        this.counter ++
        this.router.navigate(['/'])
    }
}
