## Solutis Comic Center

Quadrinhos Online! Cadastre-se!
Desafio proposto com foco em Front End. O problema proposto é uma situação fictícia.

## Getting Started

### Prerequisites

* npm - Package manager for Javascript

```
$npm install npm@latest -g
```

### Installing

Para rodar a aplicação precisamos de certas ferramentas instaladas:

- Angular CLI
- Bootstrap 4.0
- Rxjs

```
$ npm install -g @angular/cli
$ npm install rxjs
$ npm install bootstrap
```

## Running the tests

Para utilizar a aplicação simplesmente utilize o comando:
```
npm start
```
Com isso vá ao localhost:4200 para ver a aplicação

A aplicação atualmente consta de 3 telas: Home-Dashboard, Lista de Cadastros e Formulario de Cadastro com seus respectivos diretórios:
* Home-Dashboard: src/app/home-dashboard
* Lista de Cadastros: src/app/comics/comic-listar
* Formulário de Cadastro: src/app/comics/comics-cadastrar

## Explaining

- Infelizmente a aplicação está incompleta e a lista de cadastros não foi implementada.
- O Formulário de Cadastro espera uma entrada backend no diretório src/app/comics/comics-cadastrar/comics-cadastrar.component.ts
- A idéia seria que na função onSubmit teriamos um post que esperaria uma url para fazer os requests em http.
- A aplicação não demonstra persistência no back-end e devido a outros fatores foi feito um foco superior em front-end.


## Built With

* [Angular CLI](https://cli.angular.io/) - Comand line interface for Angular
* [Angular 6.1.0](https://angular.io/docs) - Web framework used
* [Bootstrap 4.1.3](https://getbootstrap.com/docs/4.1) - Tollkit for HTML, CSS and Javascript
* [RxJS 6.0](https://rxjs-dev.firebaseapp.com/) - Library for reactive programming using Observables


## Versioning

* Fonts da aplicação:
  [Montserrat]('https://fonts.googleapis.com/css?family=Montserrat')
 , [Do Hyeon]('https://fonts.googleapis.com/css?family=Do+Hyeon')
 
* Arquivo de config: tsconfig.json

## Authors

* Antônio Lucas Ferreira de Souza

## Acknowledgments

* Daiane Silva - grandes dicas de Front End
* José Roberto - auxiliou em muitas dúvidas quanto ao framework e a linguagem typescript
