export interface IMenu {
  id: string;
  name: string;
  url: string;
}

export interface I_TOGGLE_DATE {
  id: string;
  name: string;
}

export const MENU: IMenu[] = [
  {
    id: "positions",
    name: "Positions",
    url: "/positions",
  },
  {
    id: "lending",
    name: "Lending",
    url: "/lending",
  },
  {
    id: "staking",
    name: "Staking",
    url: "/staking",
  },
  {
    id: "portfolio",
    name: "Portfolio",
    url: "/my-portfolio",
  },
];

export const TOGGLE_DATE: I_TOGGLE_DATE[] = [
  {
    id: "24h",
    name: "24h",
  },
  {
    id: "7d",
    name: "7d",
  },
  {
    id: "14d",
    name: "14d",
  },
  {
    id: "30d",
    name: "30d",
  },
  {
    id: "90d",
    name: "90d",
  },
  {
    id: "180d",
    name: "180d",
  },
  {
    id: "1y",
    name: "1y",
  },
  {
    id: "max",
    name: "Max",
  },
];

export const shortenString = (str: string) => {
  if (!str) {
    return;
  }
  if (str?.length <= 8) {
    return str;
  }
  return `${str.substring(0, 4)}...${str.substring(str.length - 4)}`;
};

export const formatPrice = (price: number): string => {
  return `$${price.toFixed(4)}`;
};

export const formatQuantity = (quantity: number, decimals: number): string => {
  return (quantity / Math.pow(10, decimals)).toFixed(4);
};

export const formatValue = (price: number, quantity: number, decimals: number): string => {
  const value = price * (quantity / Math.pow(10, decimals));
  return `$${value.toFixed(4)}`;
};
