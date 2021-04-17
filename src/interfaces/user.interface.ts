import {Document} from 'mongoose'




export interface UserModel extends Document {
id?: string,
name?: string,
email?: string,
password?: string,
img?: string,
role?: string,
active?: boolean,
google?: boolean
}