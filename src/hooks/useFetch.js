import { useState, useEffect } from "react";

// *Importante que empieze el fichero por 'use' para que react detecte que es un hook

export const useFetch = (url) => {
  const [data, setData] = useState(null); // Recibimos los datos
  const [error, setError] = useState(null); // Si hay algún error
  const [loading, setLoading] = useState(false); // Está pendiente

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchData = async (url) => {
      setLoading(true);
      try {
        let res = await fetch(url);

        // Validación de la petición
        if (!res.ok) {
            let err = new Error("Error en la petición Fetch");
            err.status = res.status || "00";
            err.statusText = res.statusText || "Ocurrió un error";
          throw err; // Return para captura errores
        }

        const json = await res.json();

        if(!signal.aborted){
            setData(json);
            setError(null);
        }
      } catch (err) {
        if(!signal.aborted){
            setData(null);
            setError(err);
        }
      } finally {
        if(!signal.aborted){
            setLoading(false);
        }
      }
    };
    fetchData(url);

    return () => abortController.abort();
  }, [url]);

  return { data, error, loading };
};
