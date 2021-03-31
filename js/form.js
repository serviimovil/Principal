document.querySelector("#submit").addEventListener("click", e => {
  e.preventDefault();

  //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
  let telefono = "573225700808";

  let cliente = document.querySelector("#cliente").value;
  let cliente = document.querySelector("#pagomovil").value;
  let cliente = document.querySelector("#nombre").value;
  let documento = document.querySelector("#documento").value;
  let cliente = document.querySelector("#pesos").value;
  let cliente = document.querySelector("#bolivares").value;
  let servicio = document.querySelector("#servicio").value;
  let resp = document.querySelector("#respuesta");

  resp.classList.remove("fail");
  resp.classList.remove("send");

  let url = `https://api.whatsapp.com/send?phone=573225700808&text=
		*_${cliente}_*%0A%0A${pagomovil}%0A${nombre}%0A${documento}%0A${pesos}%0A*Bss ${bolivares}*%0A${servicio}`;

  if (cliente === "" || pagomovil === "" || documento === "") {
    resp.classList.add("fail");
    resp.innerHTML = `Faltan algunos datos ${cliente}`;
    return false;
  }
  resp.classList.remove("fail");
  resp.classList.add("send");
  resp.innerHTML = `Datos enviado correctamente, ${cliente}`;

  window.open(url);
});
