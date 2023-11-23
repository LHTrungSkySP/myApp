import { Component, OnInit } from '@angular/core';
import { BitcoinResponse, BitcoinInfor } from 'src/app/Models/bitcoin';
import { BitcoinService } from 'src/app/Services/bitcoin.service';

@Component({
  selector: 'app-list-coin',
  templateUrl: './list-coin.component.html',
  styleUrls: ['./list-coin.component.scss']
})
export class ListCoinComponent implements OnInit {
  listBitcoin!: BitcoinInfor[];
  listBitcoinPaging!: BitcoinInfor[];
  // abc!: BitcoinInfor;
  sortName = false;
  sortID = false;
  sortPrice = false;
  sortDate = false;
  sortTotalSupply = false;
  sortNumMarketPairs = false;
  sortMaxSupply = false;

  startPaging = 0;
  totalNumPage!:number;
  totalRecordAPage=15;

  constructor(private bitcoinService: BitcoinService) { }

  ngOnInit(): void {
    this.bitcoinService.getListCoin().subscribe(
      (respone) => {
        this.listBitcoin = (respone.body as BitcoinResponse).data;

        this.totalNumPage=Math.ceil(this.listBitcoin.length / this.totalRecordAPage);
        this.paging();
        // this.abc=this.listBitcoin[0];
      }
    )
  }


  onPageChange(event: any) {
    this.startPaging=event.first;
    this.paging();
  }

  paging() {
    this.listBitcoinPaging=this.listBitcoin.slice(this.startPaging,this.startPaging+this.totalRecordAPage);
  }

  sortNameAction() {
    if (this.sortName) {
      this.listBitcoin.sort((x, y) => {
        if (x.slug < y.slug) return 1;
        if (x.slug > y.slug) return -1;
        else return 0;
      })
      this.sortName = false;
    }
    else {
      this.listBitcoin.sort((x, y) => {
        if (x.slug > y.slug) return 1;
        if (x.slug < y.slug) return -1;
        else return 0;
      })
      this.sortName = true;
    }
    this.paging();
  }

  sortPriceAction() {
    if (this.sortPrice) {
      this.listBitcoin.sort((x, y) => {
        if (x.quote.USD.price < y.quote.USD.price) return 1;
        if (x.quote.USD.price > y.quote.USD.price) return -1;
        else return 0;
      })
      this.sortPrice = false;
    }
    else {
      this.listBitcoin.sort((x, y) => {
        if (x.quote.USD.price > y.quote.USD.price) return 1;
        if (x.quote.USD.price < y.quote.USD.price) return -1;
        else return 0;
      })
      this.sortPrice = true;
    }
    this.paging();
  }
  sortIDAction() {
    if (this.sortID) {
      this.listBitcoin.sort((x, y) => {
        if (x.id < y.id) return 1;
        if (x.id > y.id) return -1;
        else return 0;
      })
      this.sortID = false;
    }
    else {
      this.listBitcoin.sort((x, y) => {
        if (x.id > y.id) return 1;
        if (x.id < y.id) return -1;
        else return 0;
      })
      this.sortID = true;
    }
    this.paging();
  }
  sortDateAction() {
    if (this.sortDate) {
      this.listBitcoin.sort((x, y) => {
        if (x.date_added < y.date_added) return 1;
        if (x.date_added > y.date_added) return -1;
        else return 0;
      })
      this.sortDate = false;
    }
    else {
      this.listBitcoin.sort((x, y) => {
        if (x.date_added > y.date_added) return 1;
        if (x.date_added < y.date_added) return -1;
        else return 0;
      })
      this.sortDate = true;
    }
    this.paging();
  }
  sortTotalSupplyAction() {
    if (this.sortTotalSupply) {
      this.listBitcoin.sort((x, y) => {
        if (x.total_supply < y.total_supply) return 1;
        if (x.total_supply > y.total_supply) return -1;
        else return 0;
      })
      this.sortTotalSupply = false;
    }
    else {
      this.listBitcoin.sort((x, y) => {
        if (x.total_supply > y.total_supply) return 1;
        if (x.total_supply < y.total_supply) return -1;
        else return 0;
      })
      this.sortTotalSupply = true;
    }
    this.paging();
  }

  sortMarketPairAction() {
    if (this.sortNumMarketPairs) {
      this.listBitcoin.sort((x, y) => {
        if (x.num_market_pairs < y.num_market_pairs) return 1;
        if (x.num_market_pairs > y.num_market_pairs) return -1;
        else return 0;
      })
      this.sortNumMarketPairs = false;
    }
    else {
      this.listBitcoin.sort((x, y) => {
        if (x.num_market_pairs > y.num_market_pairs) return 1;
        if (x.num_market_pairs < y.num_market_pairs) return -1;
        else return 0;
      })
      this.sortNumMarketPairs = true;
    }
    this.paging();
  }

}
