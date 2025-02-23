import { Component, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({ name: 'safeUrl' })
export class SafeUrlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  // URL initiale pour Sfax
  mapUrl: string = "https://www.openstreetmap.org/export/embed.html?bbox=10.75%2C34.73%2C10.77%2C34.74&amp;layer=mapnik";

  restaurants = [
    { name: 'Restaurant 1', address: 'Adresse 1', rating: 9.2 },
    { name: 'Restaurant 2', address: 'Adresse 2', rating: 8.9 },
    { name: 'Restaurant 3', address: 'Adresse 3', rating: 9.4 },
  ];

  constructor() {}

  onCityChange(event: any): void {
    const city = event.target.value;
    if (city === 'sfax') {
      this.mapUrl = "https://www.openstreetmap.org/export/embed.html?bbox=10.75%2C34.73%2C10.77%2C34.74&amp;layer=mapnik";
    } else if (city === 'city1') {
      this.mapUrl = "https://www.openstreetmap.org/export/embed.html?bbox=10.60%2C34.70%2C10.65%2C34.72&amp;layer=mapnik";
    } else if (city === 'city2') {
      this.mapUrl = "https://www.openstreetmap.org/export/embed.html?bbox=10.80%2C34.70%2C10.85%2C34.75&amp;layer=mapnik";
    }
  }
}
