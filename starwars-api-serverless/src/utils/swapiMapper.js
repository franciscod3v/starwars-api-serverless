const mapSwapiDataToModel = (swapiData) => {
  return {
    id: swapiData.url.split("/").filter(Boolean).pop(),
    nombre: swapiData.name,
    altura: swapiData.height,
    masa: swapiData.mass,
    color_cabello: swapiData.hair_color,
    color_piel: swapiData.skin_color,
    color_ojos: swapiData.eye_color,
    año_nacimiento: swapiData.birth_year,
    género: swapiData.gender,
    planeta_natal: swapiData.homeworld,
    peliculas: swapiData.films,
    especies: swapiData.species,
    vehiculos: swapiData.vehicles,
    naves_estelares: swapiData.starships,
    creado: swapiData.created,
    editado: swapiData.edited,
    url: swapiData.url,
  };
};

module.exports = { mapSwapiDataToModel };
