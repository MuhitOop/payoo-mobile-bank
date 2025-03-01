document.getElementById("cash-out-form").style.display = "none";
document.getElementById("add-money-box").addEventListener("click", () => {
  handleToggol("add-money-form", "block");
  handleToggol("cash-out-form", "none");
  handleToggol("transection-history", "none");
});

document.getElementById("cashOut-box").addEventListener("click", () => {
  handleToggol("add-money-form", "none");
  handleToggol("cash-out-form", "block");
  handleToggol("transection-history", "none");
});
