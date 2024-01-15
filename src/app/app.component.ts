import { Component } from '@angular/core';

// Importa o Core do Firebase e componentes necessários.


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  // Inicializa core do Firebase.


  // Inicializa Authentication.
 

  // Variáveis de ambiente.


  // Dados do usuário na view, quando não logado.
 

  // Menu principal
  public appPages = [
    { title: 'Início', url: '/home', icon: 'home' },
    { title: 'Faça Contato', url: '/contacts', icon: 'chatbubbles' },
    { title: 'Sobre', url: '/about', icon: 'information-circle' },
    { title: 'Sua Privacidade', url: '/privacy', icon: 'lock-closed' },
  ];

  constructor() { }

  ngOnInit() {

    // Monitora status do usuário.
    
  }
}
