import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Item } from '../../types/core.interface';
import { StoreService } from '../../services/store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  @ViewChild('formRef') formRef!: ElementRef<HTMLFormElement>
  @ViewChild('nameRef') nameRef!: ElementRef<HTMLInputElement>
  @ViewChild('priceRef') priceRef!: ElementRef<HTMLInputElement>
  @ViewChild('quantityRef') quantityRef!: ElementRef<HTMLInputElement>

  private _storeService = inject(StoreService)
  private _routerService = inject(Router)


  public name: string | undefined
  public price: number | undefined
  public quantity: number | undefined


  handleSubmit() {
    if (!this.name || !this.price || !this.quantity) {
      this.handleError()
      return
    }
    const data: Item = {
      name: this.name,
      price: this.price,
      quantity: this.quantity,
      check: true
    }
    this._storeService.addItem = data
    this._routerService.navigate(['/'])
  }
  handleUncheck(value: 'name' | 'price' | 'quantity') {
    if (value === 'name') this.nameRef.nativeElement.classList.remove('alert')
    if (value === 'price') this.priceRef.nativeElement.classList.remove('alert')
    if (value === 'quantity') this.quantityRef.nativeElement.classList.remove('alert')
  }

  handleError() {
    if (!this.name) this.nameRef.nativeElement.classList.add('alert')
    if (!this.price) this.priceRef.nativeElement.classList.add('alert')
    if (!this.quantity) this.quantityRef.nativeElement.classList.add('alert')
    alert('missing data')
  }

  handleReset() {
    this.formRef.nativeElement.reset()
    this.nameRef.nativeElement.classList.remove('alert')
    this.priceRef.nativeElement.classList.remove('alert')
    this.quantityRef.nativeElement.classList.remove('alert')
  }
}
