export interface IMenu {
  id: string;
  name: string;
  url: string;
}

export const MENU: IMenu[] = [
  {
    id: "products",
    name: "Products",
    url: "/products",
  },
  {
    id: "protocols",
    name: "Protocols",
    url: "/protocols",
  },
  {
    id: "tokens",
    name: "Tokens",
    url: "/tokens",
  },
  {
    id: "portfolio",
    name: "Portfolio",
    url: "/my-portfolio",
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
