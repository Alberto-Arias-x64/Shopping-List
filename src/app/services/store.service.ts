import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Item } from '../types/core.interface';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private _list = new BehaviorSubject<Item[]>([])

  get listItemsObserver() {
    return this._list.asObservable()
  }

  set addItem(item: Item) {
    const actual = this._list.getValue()
    this._list.next([...actual, item])
  }

  clearStore() {
    this._list.next([])
  }
}
