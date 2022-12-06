import { publishFacade } from '@angular/compiler';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'meu-primeiro-projeto';
}
/**
 * name
 */
publicTitle = "Bem vindo"