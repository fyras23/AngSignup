import { Role } from "./role.model";

export class User{
    user_id!: number;
  username!: string;
  password!: string;
  enabled!: boolean;
  roles!: Role[];
  email!: string;
  verificationCodde!: string;
  thelink! : string;
  allRoles! : Role[];
  
    }
    