  // Initialize display element
  const visitsDisplay = document.querySelector(".visits");

  // Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists. If the numVisits KEY is missing, assign 0 to the numVisits variable.
  let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

  // Determine if this is the first visit or display the number of visits.
  if (numVisits !== 0) {
      visitsDisplay.textContent = numVisits;
  } else {
      visitsDisplay.textContent = `Congrats, this is your first visit.`;
  }

  // Increment the number of visits by one.
  numVisits++;

  // Store the new visit total into localStorage, key=numVisits-ls
  localStorage.setItem("numVisits-ls", numVisits);