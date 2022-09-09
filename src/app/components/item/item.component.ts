import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from 'src/interfaces';

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

    @Input() item: Item = new Item()
    @Output() delete_item: EventEmitter<Item> = new EventEmitter() 

    constructor() { }

    ngOnInit(): void {
    }

    delete(item:Item){
        this.delete_item.emit(item)
    }

    hide(){
        this.item.completed = !this.item.completed
    }

}
