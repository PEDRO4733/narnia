import bcrypt from 'bcrypt';
import User from '../models/User.js';

const Ctrl = {
    register: async (req,res) => {
        const {email,password,passwordCheck,orgName,name} = req.body;
        if(!email || !password || !passwordCheck || !orgName || !name){ 
            return res.status(400).json({msg:"Todos los campos tienen que estar llenados."});
        }
        const userExists = await User.findOne({email:email});
        if(userExists){
            return res.status(400).json({msg:"El email ya esta en uso ."});
        }
        if(password !== passwordCheck){
            return res.status(400).json({msg:"Las contraseñas no coinciden."});
        }
        if(password.length <= 7){
            return res.status(400).json({msg:"Contraseña de al menos 8 caracteres."});
        }
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);
        try {
            const newUser = new User({
                email:email,
                password:passwordHash,
                orgName:orgName,
                name:name
            });
            await newUser.save();
            return res.status(200).json({msg:"Registrado"});
        } catch (err) {
            return res.status(500).json({msg:err.message});
        }
    },
    login: async (req,res) => {
         //intenta correr este codigo 
        try { 
            const {email,password,passwordCheck} = req.body;

            if(!email || !password || !passwordCheck){
                return res.status(400).json({msg:"Todos los campos tienen que estar llenos."});
            }
             //verifica si el email existe
            const user = await User.findOne({email:email});
            if(!user){
                return res.status(400).json({msg:"No existe cuenta con este email."});
            }
        //verifica que todas las contraselñas coincidan 
            if(password !== passwordCheck){ 
                return res.status(400).json({msg:"Las contraseñas no coinciden."});
            }
            //Compara las contraseñas
            const isMatch = await bcrypt.compare(password,user.password);
            if(!isMatch){
                return res.status(400).json({ msg: "Credenciales invalidas."});
            }
            return res.status(200).json({msg:"Loggeado."});
            //si agarraste un error que hacer con eso
        } catch (err) { 
            return res.status(500).json({msg:err.message});
        }
    }
}
export default Ctrl;