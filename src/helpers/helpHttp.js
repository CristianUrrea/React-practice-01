export const helpHttp = () => {
  const customFetch = (endpoint, options) => {
    const defaultHeader = {
      accept: "aplication/json",
    };

    const controller = new AbortController(); // Abortar petición fetch en caso que no llegue ninguna respuesta
    options.signal = controller.signal; // Controlar errores

    options.method = options.method || "GET"; // Si el usuario no te ha especificado ningún metodo por defecto será el 'GET'
    options.headers = options.headers
      ? { ...defaultHeader, ...options.headers }
      : defaultHeader; // Cuando el usuario indique su opciones se mezcla con la que nosotrom hemos puesto por defecto sino usara la por defecto

    options.body = JSON.stringify(options.body) || false;
    if (!options.body) delete options.body; // Lo hacemos para evitar enviar un body falso o vacio para que no marque ningún mensaje de error lo eliminamos

    setTimeout(() => controller.abort(), 3000); // Si no recibo respuesta del servido en 3s ejecutamos la función abort del controlador

    let fetchErr = {};
    return fetch(endpoint, options)
      .then((res) =>
        res.ok
          ? res.json()
          : Promise.reject({
              err: true,
              status: res.status || "00",
              statusText: res.statusText || "Failed!",
            })
      )
      .catch((err) => err);
  };

  const get = (url, options = {}) => customFetch(url, options);
  const post = (url, options = {}) => {
    options.method = "POST";
    return customFetch(url, options);
  };
  const put = (url, options = {}) => {
    options.method = "PUT";
    return customFetch(url, options);
  };
  const del = (url, options = {}) => {
    options.method = "DELETE";
    return customFetch(url, options);
  };

  return { get, post, put, del };
};
