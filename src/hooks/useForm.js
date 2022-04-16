import { useState } from "react";
import { helpHttp } from "../helpers/helpHttp";

export const useForm = (initialForm, validateForm) => {
  // 1º Variables de estado
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  // 2º Variables posterior
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm(form));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateForm(form));

    // Si el objecto errores no trae ninguna propiedad
    if(Object.keys(errors).length === 0){
      alert("Enviamos formulario");
      setLoading(true);
      helpHttp().post("https://formsubmit.co/ajax/cristian.urrea4@gmail.com", {
        body:form,
        headers: {
          "Content-Type":"application/json",
          Accept:"application/json"

        }
      }).then((res) => {
        setLoading(false);
        setResponse(true); // La petición se realizó correctamente
        setForm(initialForm);
        setTimeout(() => {
          setResponse(false);
        }, 5000);
      })
    } else {
      return;
    }
  };

  return {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};
