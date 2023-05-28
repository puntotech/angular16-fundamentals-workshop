import { Component, inject } from '@angular/core';
import { Observable, Subject, auditTime, debounce, debounceTime, delay } from 'rxjs';

import { CommonModule } from '@angular/common';
import { LoaderService } from '../../services/loaderService';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {

  isLoading$: Observable<boolean> = inject(LoaderService).isLoading;

}
