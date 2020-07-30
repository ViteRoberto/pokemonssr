import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { isPlatformServer } from '@angular/common';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.page.html',
  styleUrls: ['./detalles.page.scss'],
})
export class DetallesPage implements OnInit {

  id = null;
  data = null;

  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    @Inject(PLATFORM_ID) private platformId,
    private transferState: TransferState
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.loadData();
  }

  ngOnInit() {
  }

  loadData(){
    const DATA_KEY = makeStateKey(`pokemon-${this.id}`);
    if(this.transferState.hasKey(DATA_KEY)){
      console.log('Fet data from state');
      this.data = this.transferState.get(DATA_KEY,null);
      this.transferState.remove(DATA_KEY);
    }else{
      console.log('GET from API');
      this.http
        .get(`https://pokeapi.co/api/v2/pokemon/${this.id}`)
        .subscribe(res => {
          if(isPlatformServer(this.platformId)){
            this.transferState.set(DATA_KEY,res);
          }else{
            this.data = res;
          }
        });
    }
  }

}
