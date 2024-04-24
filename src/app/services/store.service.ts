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

  set changeItem(item: string) {
    const actual = this._list.getValue()
    const newList = actual.map(element => {
      if (element.name === item) {
        return {
          ...element,
          check: !element.check
        }
      } return element
    })
    this._list.next(newList)
  }

  set deleteItem(item: string) {
    const actual = this._list.getValue()
    const newList = actual.filter(element => element.name !== item)
    this._list.next(newList)
  }

  clearStore() {
    this._list.next([])
  }
}
