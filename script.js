const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

menuToggle?.addEventListener("click", () => {
  menu.classList.toggle("open");
});

document.querySelectorAll(".menu a").forEach(link => {
  link.addEventListener("click", () => menu.classList.remove("open"));
});

function checkCoverage(event) {
  event.preventDefault();
  const cep = document.getElementById("cep").value.trim();
  const address = document.getElementById("address").value.trim();
  const result = document.getElementById("coverage-result");

  if (!cep || !address) {
    result.textContent = "Preencha o CEP e o endereço.";
    return;
  }

  result.textContent = "Consulta recebida! Integre este formulário ao seu sistema/CRM para retornar a disponibilidade real.";
}

function openWhatsApp() {
  const phone = "5551960007004"; // TROQUE pelo WhatsApp oficial da Maxxi
  const message = encodeURIComponent("Olá! Quero contratar um plano da Maxxi Internet Fibra.");
  window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
}

document.getElementById("cep")?.addEventListener("input", (e) => {
  let v = e.target.value.replace(/\D/g, "").slice(0, 8);
  if (v.length > 5) v = v.slice(0, 5) + "-" + v.slice(5);
  e.target.value = v;
});
