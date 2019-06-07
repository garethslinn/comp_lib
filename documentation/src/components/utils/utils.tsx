import * as React from "react";

export const keygen: React.FunctionComponent = () => {
  return Math.random()
      .toString(20)
      .substring(4);
};
