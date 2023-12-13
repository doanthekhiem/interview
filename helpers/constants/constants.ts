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
    id: "Use Cases",
    name: "Use Cases",
    url: "/use-cases",
  },
];
