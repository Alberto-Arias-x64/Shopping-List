import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { Item } from '../../types/core.interface';
import { CurrencyPipe } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit, OnDestroy {

  private _storeService = inject(StoreService)
  private sub$ = new Subscription()

  public itemList: Item[] = []
  public total = 0

  ngOnInit() {
    this.sub$ = this._storeService.listItemsObserver.subscribe(values => {
      this.itemList = values
      this.total = this.calculateTotal(values)
    })
  }

  ngOnDestroy() {
    this.sub$.unsubscribe()
  }

  calculateTotal(list: Item[]): number {
    let total = 0
    list.forEach(element => {
      if (element.check) total += element.price * element.quantity
    })
    return total
  }

  handleChange(element: string) {
    this._storeService.changeItem = element
  }

  handleDelete(element: string) {
    this._storeService.deleteItem = element
  }
}
