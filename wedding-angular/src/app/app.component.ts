import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import {VgApiService, VgCoreModule} from '@videogular/ngx-videogular/core';
import {VgControlsModule} from '@videogular/ngx-videogular/controls';
import {VgOverlayPlayModule} from '@videogular/ngx-videogular/overlay-play';
import {VgBufferingModule} from '@videogular/ngx-videogular/buffering';
// import {SingleMediaPlayer} from './single-media-player';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
    VgCoreModule,
        VgControlsModule,
        VgOverlayPlayModule,
        VgBufferingModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  @ViewChild('media', { static: true }) media: ElementRef<HTMLVideoElement> | undefined;
  preload: string = 'auto';
  api: VgApiService | undefined;
  title = 'angular';
  paly= false;

  constructor() {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.playVideo();
    }, 1000); // Delay of 1 second
  }

  onPlayerReady(event: any) {
    this.api = event;
  }

  playVideo() {
    this.media?.nativeElement.play().catch(error => {
      console.error('Error attempting to play video:', error);
    });
  }

  clickme() {
    this.paly = !this.paly;
  }
}


