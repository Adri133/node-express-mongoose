import { Schema, model} from 'mongoose';

const pokemonSchema = new Schema({ 
  name: {
    type: String,
    required: [true, "Why no name?"],
  }, 
  type: {
    type: String,
    required: [true, "Why no type?"],
  } 
});

const Pokemon = model('pokemon', pokemonSchema);
export default Pokemon;