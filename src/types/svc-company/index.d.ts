interface CompanyScore {
  dividend: number;
  future: number;
  health: number;
  past: number;
  value: number;
  total: number;
  sentence: string;
}

interface ClosePrice {
  price: number;
  date: Date;
}

interface Company {
  name: string;
  uniqueSymbol: string;
  score: CompanyScore;
  latestClosePrice?: ClosePrice;
  closePrices?: ClosePrice[];
}
