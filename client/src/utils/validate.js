export const validateGame = ({
    name,
    description,
    parent_platforms,
    image,
    releaseDate,
    rating,
    genres,
    
  }) => {
    const error = { status: false }
  
    if (name.split(' ').length > 15) {
      error.name = 'El nombre debe tener menos de 15 palabras.'
    }else{
      error.name = ''
    }
  
    if (!name.length) {
      error.name = 'El nombre no puede estar vacía.'
    }
    
    if (!description) {
      error.description = 'La descripción no puede estar vacía.'
    }else{
      error.description =''
    }
  
    if (description.split(' ').length < 5){
      error.description = 'La descripción debe tener al menos 5 palabras'
    } else{
      error.description =''
    }
  
    if (description.length > 1000) {
      error.description = 'La descripción no debe exceder los 1000 caracteres.'
    } else{
      error.description = ''
    }
  
    if (!parent_platforms.length){
      error.parent_platforms = 'Debe elegir al menos una plataforma.'
    }else{
      error.parent_platforms ='';
    }

    if (!image){
      error.image = 'Se debe ingresar una url hacia una imagen.'
    }else{error.image = ''}
  
    if (!/^https?:\/\/[^\s/$.?#].[^\s]*\.(png|jpg|webp)$/.test(image)){
      error.image = 'Se debe ingresar una url hacia una imagen.'
    }else{error.image = ''}
  
    if (!releaseDate.length) error.releaseDate = 'Elija una fecha.'
  
    if (!/^\d+(\.\d{1,2})?$|^\d+\.?$/.test(rating))
      error.rating = 'El rating puede tener hasta 2 decimales.'
      
    if (rating < 0 || rating > 5)
      error.rating = 'El rating tiene que estar entre 0 y 5.'
  
    if (!genres.length) {
      error.genres = 'Debe elegir al menos un genero.'
    }else{
      error.genres = ''
    }
  
    if (Object.keys(error).length >= 1) error.status = true
  
    
    return error
  }