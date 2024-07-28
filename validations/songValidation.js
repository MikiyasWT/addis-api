const Joi = require('@hapi/joi');

const songValidation = (data) => {
     const songSchema = Joi.object({
    
        title:Joi.string()
                .min(3)
                .max(30),
        artist:Joi.string()
                .min(3)
                .max(30),
        album:Joi.string()
                .min(3)
                .max(30),
        genre:Joi.string()
                .min(3)
                .max(30)     

  
  })

  return songSchema.validate(data)
}


module.exports.songValidation = songValidation