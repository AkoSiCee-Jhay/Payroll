const rateInput = document.getElementById("rate");
const daysInput = document.getElementById("days");

rateInput.addEventListener("input", () => {
  rateInput.value = rateInput.value.replace(/[^\d.]/g, ""); 
});

rateInput.addEventListener("blur", () => {
  let value = parseFloat(rateInput.value);
  if (!isNaN(value)) {
    rateInput.value = "₱" + value.toFixed(2);
  } else {
    rateInput.value = "";
  }
});

daysInput.addEventListener("input", () => {
  daysInput.value = daysInput.value.replace(/\D/g, "");
});

daysInput.addEventListener("blur", () => {
  let value = parseInt(daysInput.value);
  if (!isNaN(value)) {
    daysInput.value = value + " days";
  } else {
    daysInput.value = "";
  }
});
  function validateName(input, errorId, allowSpace) {
    let regex = allowSpace ? /^[a-zA-Z\s]*$/ : /^[a-zA-Z]*$/; 
    let errorElement = document.getElementById(errorId);

    if (!regex.test(input.value)) {
      errorElement.textContent = "⚠ Letters only" + (allowSpace ? " and spaces allowed." : ".");
      input.value = input.value.replace(/[^a-zA-Z\s]/g, "");
    } else {
      errorElement.textContent = "";
    }
    input.value = input.value.replace(/\b\w/g, c => c.toUpperCase());
  }

  function submitForm() {
    let first = document.getElementById("firstName").value.trim();
    let middle = document.getElementById("middleName").value.trim();
    let last = document.getElementById("lastName").value.trim();
    let pos = document.getElementById("position").value.trim();

    let rate = parseFloat(rateInput.value.replace(/[^\d.]/g, "")) || 0;
    let days = parseInt(daysInput.value.replace(/\D/g, "")) || 0;

    if (!document.getElementById("empId").value.trim() || !first || !last || !pos || rate <= 0 || days <= 0) {
      alert("Please fill-out everything correctly!");
      return;
    }

    let middleFormatted = middle ? middle.charAt(0).toUpperCase() + "." : "N/A";
    let firstFormatted = first.replace(/\b\w/g, c => c.toUpperCase());
    let lastFormatted = last.replace(/\b\w/g, c => c.toUpperCase());

    let gross = rate * days;
    let sss = gross * 0.05;
    let pagibig = gross * 0.03;
    let philhealth = gross * 0.02;
    let tax = gross * 0.05;
    let totalDeduction = sss + pagibig + philhealth + tax;
    let net = gross - totalDeduction;

    localStorage.setItem("payrollData", JSON.stringify({
      id: document.getElementById("empId").value.trim(), firstFormatted, middleFormatted, lastFormatted, pos,
      rate, days, gross, sss, pagibig, philhealth, tax, totalDeduction, net
    }));

    window.location.href = "result.html";
  }

