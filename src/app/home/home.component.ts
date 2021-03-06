import { Component, OnInit } from '@angular/core';
import { Oferta } from '../shared/oferta.model';
import { OfertasService } from '../ofertas.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ OfertasService ]
})
export class HomeComponent implements OnInit {

  public ofertas: Oferta[];

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
   // this.ofertas = this.ofertasService.getOfertas()
    // console.log(this.ofertas)

     this.ofertasService.getOfertas2()
     .then((ofertas: Oferta[]) => {
      console.log(' A função resolve() foi resolvida depois de 3 segundos '),
      this.ofertas = ofertas;
      })

      .catch(( param: any ) => {
        console.log(param);
      });
  }

}

