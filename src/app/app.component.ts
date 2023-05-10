import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeroItemComponent } from './components/hero-item/hero-item.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeroItemComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'workshop-fundamentals';
}
