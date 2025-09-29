"use client";
import { useState } from "react";
import "./Styles.css";
import Graphic from "../molecula/graphic/Graphic";

const randomPorcent = () => {
  const aux_1 = Math.floor(Math.random() * 101);
  const aux_2 = Math.floor(Math.random() * 101);

  const [x, y] = [aux_1, aux_2].sort((m, n) => m - n);

  // calculamos los tres segmentos
  const porcent_1 = x;
  const porcent_2 = y - x;
  const porcent_3 = 100 - y;

  return [porcent_1, porcent_2, porcent_3];
};

const Demo = () => {
  const [porcnets, setPorcents] = useState<number[]>(randomPorcent());
  const [sell, keep, buy] = porcnets;
  const handleClick = () => {
    const D = randomPorcent();
    setPorcents(D);
  };

  return (
    <>
      <button className="p-4 bg-purple-600 text-white" onClick={handleClick}>
        Random
      </button>
      <section className="wrapper">
        <Graphic sell={sell} keep={keep} buy={buy} />
        <Graphic sell={buy} keep={keep} buy={sell} />
        <Graphic sell={keep} keep={sell} buy={buy} />
        <Graphic sell={buy} keep={sell} buy={keep} />
        <Graphic sell={sell} keep={buy} buy={keep} />
      </section>
    </>
  );
};

export default Demo;
