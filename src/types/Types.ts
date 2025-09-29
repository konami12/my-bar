export type Item = {
  name: string;
  percent: number;
  color?: string;
}

export type Props = {
  sell: number;
  keep: number;
  buy: number;
};

export type ItemProps = Array<Item>;