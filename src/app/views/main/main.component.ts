import { Component, OnInit, inject } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { Item } from '../../types/core.interface';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {

  private _storeService = inject(StoreService)

  public itemList: Item[] = []

  ngOnInit() {
    this._storeService.listItemsObserver.subscribe(values => this.itemList = values)
  }

  handleChange(element: string) {
    //TODO
  }

  handleDelete(element: string) {
    //TODO
  }
}
