import { Props, ItemProps } from "../../../../types/Types";

const PRIMARY = "#000000";
const ACCENT = "#444EE6";
const TERTIARY = "#CED9E5";

const assignColors = ({ sell, keep, buy }: Props) => {
  const entries: ItemProps = [
    { name: "Vender", percent: sell },
    { name: "Mantener", percent: keep },
    { name: "Comprar", percent: buy },
  ];

  // Sacamos valores en un array
  const percents = entries.map((element) => Math.floor(element.percent));

  // Encontramos mayor y menor
  const max = Math.max(...percents);
  const min = Math.min(...percents);

  // Cuántos son max y cuántos son min
  const countMax = percents.filter((value) => value === max).length;
  const countMin = percents.filter((value) => value === min).length;

  return entries.map((item) => {
    // Caso todos iguales → primary
    if (countMax === 3) {
      return { ...item, color: PRIMARY };
    }

    // Caso dos mayores → accent para los dos mayores
    if (countMax === 2) {
      if (item.percent === max) {
        return { ...item, color: ACCENT };
      } else {
        return { ...item, color: TERTIARY };
      }
    }

    // Caso dos menores (mismo valor) → primary para los dos menores, mayor accent
    if (countMin === 2) {
      if (item.percent === max) {
        return { ...item, color: ACCENT };
      } else {
        return { ...item, color: PRIMARY };
      }
    }

    // Caso normal: todos distintos → accent, primary, tertiary
    if (item.percent === max) {
      return { ...item, color: ACCENT };
    }

    // Para saber cuál es “segundo” y cuál “tercero” cuando todos distintos
    const sorted = [...percents].sort((a, b) => b - a);
    const second = sorted[1];

    if (item.percent === second) {
      return { ...item, color: PRIMARY };
    } else {
      return { ...item, color: TERTIARY };
    }
  });
};

export default assignColors;
