(() => {
  /* El uso de las enumeraciones ayuda a trabajar con valores
    que tienen algun sentido semanticos visualmente claro de leer*/
  enum AudioLevel {
    min = 1,
    medium = 5,
    max = 10,
  }

  let currentAudio = AudioLevel.medium;
  console.log(currentAudio);
  console.log(AudioLevel);
})();
