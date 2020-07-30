import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-segundo',
  templateUrl: './segundo.page.html',
  styleUrls: ['./segundo.page.scss'],
})
export class SegundoPage implements OnInit {

  constructor(private titleService: Title, private metaService: Meta) { }

  ngOnInit() {
    this.titleService.setTitle('Roberto Vite');
    this.metaService.updateTag({name:'description', content:'Prueba de Vite'});

    this.metaService.updateTag({property: 'og:url', content:'/segundo'});
    this.metaService.updateTag({property: 'og:type', content:'website'});
    this.metaService.updateTag({property: 'og:description', content:'Mi página de prueba'});
    this.metaService.updateTag({property: 'og:title', content:'Robert Vite'});
    this.metaService.updateTag({property: 'og:url', content:'https://graph.facebook.com/10220855081951429/picture?type=large'});
  }

}
