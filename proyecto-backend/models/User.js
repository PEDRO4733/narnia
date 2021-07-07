import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
      email:{
          type:String,
          unique:true,
          trim:true
      },
      password:{
          type:String,
          required:true,
          minLength:8,
          trim:true
      },
      orgName:{
          type:String,
          required:true,
      },
      name:{
          type:String,
          required:true,
      }
     },
      {
        timestamps:true,
        versionKey:false
      }
);
export default mongoose.model("User",userSchema);