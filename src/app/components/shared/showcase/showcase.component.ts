import { NgClass } from '@angular/common';
import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-showcase',
  imports: [MatButtonModule, NgClass],
  templateUrl: './showcase.component.html',
  styleUrl: './showcase.component.scss',
})
export class ShowcaseComponent implements OnInit, OnDestroy {
  private readonly router = inject(Router);

  public title = signal<string>('');
  public showcase = signal<string>('');

  private subscription!: Subscription;

  ngOnInit(): void {
    // titles object
    const titles: any = {
      home: '/',
      about: 'About Me',
      blog: 'Blog',
      contact: 'Contact Me',
    };

    this.subscription = this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        const url = e.url;
        const urlKey = Object.keys(titles).find((key) =>
          key.includes(url.slice(1))
        );
        if (urlKey === 'home') {
          this.title.set('Unveiling All the Latest Fashion Trends');
          this.showcase.set(
            'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum.'
          );
        } else {
          this.title.set(titles[urlKey!]);
          this.showcase.set('');
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
