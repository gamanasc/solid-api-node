import { uuid } from 'uuidv4';

export class User {
    public readonly id: string;

    public name: string;
    public email: string;
    public password: string;

    constructor (
        props: Omit<User, 'id'>, // Recebe todas as props, menos ID
        id?: string
    ){
        Object.assign(this, props); // Equivalente a this.name = props.name pra todas
    
        if(!id){
            this.id = uuid();
        }
    }

}