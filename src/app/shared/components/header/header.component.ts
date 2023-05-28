import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { UserStorageService } from '../../services/user-storage.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  private readonly userStorageService = inject(UserStorageService);
  private readonly route = inject(Router);

  public isLogin$ = this.userStorageService.isLogin();

  logout(){
    const isSure = window.confirm('Are you sure?');
    if(isSure){
      this.userStorageService.logout();
      this.route.navigate(['/auth/login']);
    }
  }
}
