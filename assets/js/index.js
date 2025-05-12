
    let startTime;
    const form = document.getElementById("myForm");
    const confirmationMsg = document.getElementById("confirmationMsg");
    const timer = document.getElementById("timer");

    form.addEventListener("focusin", function() {
      if (!startTime) startTime = Date.now(); //start the time
    });

    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const timeSpent = ((Date.now() - startTime) / 1000).toFixed(1);  //User time spent on form filling in seconds
      confirmationMsg.textContent = `Thanks for contacting us! You spent ${timeSpent} seconds.`;
      form.reset(); //clear form
      startTime = null; //set time to null
      timer.textContent = '';
    });