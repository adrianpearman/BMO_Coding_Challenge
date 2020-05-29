const RenderPrice = (price) => {
  switch (price) {
    case 1:
      return "$";
    case 2:
      return "$$";
    case 3:
      return "$$$";
    case 4:
      return "$$$$";
    default:
      break;
  }
};

export default RenderPrice;
