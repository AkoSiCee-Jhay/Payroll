let data = JSON.parse(localStorage.getItem("payrollData"));

      document.getElementById("employee").innerHTML = `
        <h3>Employee Info</h3>
        <b>ID:</b> ${data.id} <br>
        <b>Name:</b> ${data.lastFormatted}, ${data.firstFormatted} ${data.middleFormatted} <br>
        <b>Position:</b> ${data.pos} <br><br>

        <b>Rate:</b> <span class="numbers">₱${data.rate.toFixed(2)}</span><br>
        <b>Days:</b> <span class="numbers">${data.days} days</span><br>
        <b>Gross Pay:</b> <span class="numbers">₱${data.gross.toFixed(2)}</span><br><br>
        <b class="highlight">Net Pay:</b> <span class="numbers highlight">₱${data.net.toFixed(2)}</span>
      `;

      document.getElementById("deductions").innerHTML = `
        <h3>Deductions</h3>
        SSS (5%): <span class="numbers">₱${data.sss.toFixed(2)}</span><br>
        PAG-IBIG (3%): <span class="numbers">₱${data.pagibig.toFixed(2)}</span><br>
        PhilHealth (2%): <span class="numbers">₱${data.philhealth.toFixed(2)}</span><br>
        Tax (5%): <span class="numbers">₱${data.tax.toFixed(2)}</span><br>
        <hr>
        <b>Total Deduction:</b> <span class="numbers">₱${data.totalDeduction.toFixed(2)}</span>
      `;