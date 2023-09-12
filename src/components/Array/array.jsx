// armen un array de objetos de personas dentro de un
// componente persona, con name, lastname, img, iterarlos
// y mostrarlos por pantalla

function createObject(name, lastname, img) {
  const persona = {
    name,
    lastname,
    img,
    hash: name.length * subs,
    getStatus: function () {
      return `El canal de ${name} tiene ${subs}`;
    },
  };
  return persona;
}
