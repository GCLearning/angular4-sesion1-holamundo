import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '¡Hola Mundito!';

  lista = [
    'Elemento 1',
    'Elemento 2',
    'Elemento 3',
    "Flautas",
    "Tambor",
    "Guitarra Electrica"
  ]
}
