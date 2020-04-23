export const INC = "INC";
export const DEC = "DEC";

export const addNum = () => {
  return {
    type: INC,
  };
};

export const minusNum = () => {
  return {
    type: DEC,
  };
};
