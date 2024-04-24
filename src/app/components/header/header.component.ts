import { Component, inject } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  private _storeService = inject(StoreService)

  clearStore() {
    if (confirm('Do you want to clear the list?')) this._storeService.clearStore()
  }
}
