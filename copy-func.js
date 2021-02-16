const selectedWeflowDataRef = { current: "" };

document.querySelectorAll("[data-webflow]").forEach((domElement) => {
  domElement.addEventListener("click", (event) => {
    selectedWeflowDataRef.current = (
      event.target.getAttribute("data-webflow")
    );

    document.execCommand("copy");
  });
});

const copy = (event) => {
  event.preventDefault();
  event.clipboardData.setData(
    "application/json",
    selectedWeflowDataRef.current
  );
};

window.addEventListener("copy", copy);
