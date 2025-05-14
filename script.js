// Change title style
document.getElementById("change-style-btn").addEventListener("click", () => {
    const title = document.getElementById("main-title");
    title.textContent = "BSF ERP - Updated!";
    title.style.color = "#ffd700";
    title.style.backgroundColor = "#1b5e20";
    title.style.padding = "10px";
    title.style.borderRadius = "6px";
  });
  
  // Toggle info box
  document.getElementById("toggle-box-btn").addEventListener("click", () => {
    const container = document.getElementById("info-container");
    const existing = document.getElementById("status-box");
  
    if (existing) {
      existing.remove();
    } else {
      const box = document.createElement("div");
      box.id = "status-box";
      box.className = "dynamic-box";
      box.textContent = "✅ System Status: All operations running smoothly!";
      container.appendChild(box);
    }
  });
  