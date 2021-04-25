interface ICompanyScore {
  dividend: number;
  future: number;
  health: number;
  past: number;
  value: number;
  total: number;
  sentence: string;
}

interface IClosePrice {
  price: number;
  date: Date;
}

interface ICompany {
  name: string;
  uniqueSymbol: string;
  score: CompanyScore;
  latestClosePrice?: ClosePrice;
  closePrices?: ClosePrice[];
}
