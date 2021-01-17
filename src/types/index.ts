export interface AppState {
  merchants: MerchantsState;
}

export interface Transaction {
  amount: number;
  date: string;
  id: number;
}

export interface Merchant {
  categoryId: number;
  iconUrl: string;
  id: string;
  isBill: boolean;
  name: string;
  transactions: Array<Transaction>;
}

export interface MerchantsState {
  merchants: Record<string, Merchant>;
  categories: Record<string, Category>;
}

export interface Category {
  iconUrl: string;
  id: number;
  name: string;
}

export interface UiMerchant {
  iconUrl: string;
  id: string;
  isBill: boolean;
  name: string;
  categoryName: string;
  categoryIconUrl: string;
  transactions: Array<Transaction>;
}
