import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'app';

  @ViewChild('canvas', { static: true }) canvas: ElementRef<HTMLCanvasElement>;
  ctx: CanvasRenderingContext2D | any;
  colors: string[] = [
    'red',
    'green',
    'blue',
    'yellow',
    'orange',
    'purple',
    'pink',
    'brown',
    'black',
    'beige',
  ];

  ngOnInit() {
    const canvas = this.canvas.nativeElement;
    this.ctx = canvas.getContext('2d');
    const ratio = 0.8;

    const width = 400;
    const height = 400;
    canvas.width = width;
    canvas.height = height;

    this.ctx.fillStyle = this.colors[0];
    // x y width height
    this.ctx.fillRect(0, 0, width, height);

    this.nextRects(0, 0, width, height, ratio, 0);
  }

  nextRects(
    x: number, // leftupper x
    y: number, // leftupper y
    width: number, // width
    height: number, // height
    ratio: number, // next/this
    count: number //count
  ) {
    if (width > 1 && height > 1) {
      count++;
      const nextWidth = width * ratio;
      const nextHeight = nextWidth;
      const nextX = (width - nextWidth) / 2 + x;
      const nextY = (height - nextHeight) / 2 + y;
      this.ctx.fillRect(nextX, nextY, nextWidth, nextHeight);
      this.ctx.fillStyle = this.colors[count % this.colors.length];
      this.nextRects(nextX, nextY, nextWidth, nextHeight, ratio, count);
    }
  }
}
