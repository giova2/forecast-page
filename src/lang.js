const lang = () => {
  const language = navigator && navigator.language ? navigator.language : "es";
  if (language.indexOf("es") !== -1) {
    return {
      placeholderSearch:
        "Buscá el pronóstico de tu ciudad por los próximos 5 días",
      submit: "Buscar",
      city: "Ciudad",
      temperature: "Temperatura",
      pressure: "Presión",
      humidity: "Humedad",
      country: "País",
    };
  }
  return {
    placeholderSearch: "Seek the forecast of your city for the next 5 days",
    submit: "Search",
    city: "City",
    temperature: "Temperature",
    pressure: "Pressure",
    humidity: "Humidity",
    country: "Country",
  };
};

export default lang;
