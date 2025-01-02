const FormatPrice = ({ price }) => {
  return Intl.NumberFormat("en-PK", {
    style: "currency",
    currency: "PKR",
    maximumSignificantDigits: 2,
  }).format(price / 100);
};

export default FormatPrice;
