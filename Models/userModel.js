import mongoose from "mongoose";

const userSchema = mongoose.Schema(

    {
        firstName:{
            type:String,
            required:[true,'Please add a first name']
        },
        lastName:{
            type: String,
            required:[true,'Please add a last name']


        },

        email: {
            type:String,
            required:[true,'plz add an email'],
            unique:true
        },

        password:{
            type:String,
            required:[true,'plz add a password']

        },
        role:{
            type:String,
            required:[true,'plz add a role']

        }



    },
    {
        timestamps: true
    }
);

const user = mongoose.model("user", userSchema);
export default user;