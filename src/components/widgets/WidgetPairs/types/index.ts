export type Coin = "BTC" | "ETH" | "USDT";

// TODO: надо будет переписать типы для ParsedData
export interface IParsedData { 
  label: Coin;
  value: Coin;
}
