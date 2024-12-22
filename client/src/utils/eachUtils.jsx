/* eslint-disable react/prop-types */
import { Children } from "react";

const EachUtils = ({ of, render }) => {
  return <>{Children.toArray(of.map((item, index) => render(item, index)))}</>;
};

export default EachUtils;
