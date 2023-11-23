export interface BitcoinInfor {
  cmc_rank: number;
  date_added: Date;
  id: number;
  max_supply: number;
  name: string;
  num_market_pairs: number;
  quote: {
    USD: {
      price: number;
    };
  };
  slug: string;
  symbol: string;
  total_supply: number;
}

export interface BitcoinResponse{
  status: Object;
  data: BitcoinInfor[];
}
