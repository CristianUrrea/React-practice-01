import React, { useState } from "react";
import SelectList from "./SelectList";

const SelectsNested = () => {
  const [state, setState] = useState("");
  const [town, setTown] = useState("");
  const [suburb, setSuburb] = useState("");
  const key =
    "1cfce0b2e714e705c60ca73c00aa2155d7d9e7f7d2276bd5b77df600ce0602c6";

  return (
    <div>
      <h2>Seleccionables anidados</h2>
      <h3>España</h3>
      <SelectList
        title="comunidad"
        code="COM"
        url={`https://apiv1.geoapi.es/comunidades?type=JSON&key=${key}&sandbox=0`}
        handleChange={(e) => {
          console.log(e);
          setState(e.target.value);
        }}
      />
      {state && (
        <SelectList
          title="provincia"
          code="PRO"
          url={`https://apiv1.geoapi.es/provincias?CCOM=${state}&type=JSON&key=${key}&sandbox=0`}
          handleChange={(e) => {
            setTown(e.target.value);
          }}
        />
      )}
      {town && (
        <SelectList
          title="municipio"
          code="DMUN50"
          url={`https://apiv1.geoapi.es/municipios?CPRO=${town}&type=JSON&key=${key}&sandbox=0`}
          handleChange={(e) => {
            setSuburb(e.target.value);
          }}
        />
      )}

      <pre>
        <code>
          {state} - {town} - {suburb}
        </code>
      </pre>
    </div>
  );
};

export default SelectsNested;
