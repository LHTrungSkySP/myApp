import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BITCOIN_URL } from '../Helpers/constance';
import { UserModule } from '../User/user.module';

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {

  constructor(private http: HttpClient) { }

  getListCoin(){
    const headers = new HttpHeaders({
      'Accepts': 'application/json',
    });
    return this.http.get(BITCOIN_URL + '/User/getlistcoin', { headers, observe: 'response' });
  }
}
