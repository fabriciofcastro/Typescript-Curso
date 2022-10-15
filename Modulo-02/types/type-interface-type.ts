type statusTypes = 'active' | 'inactive'

interface IUser {
  nome: string  // obrigatporio
  status: statusTypes  // obrigatporio
  role?: 'admin' | 'user'  // opcinal
}

const user: IUser = {
  nome: 'Fabricio',
  status: 'active',
  role: 'admin'
}

function checkUserStatus(user: IUser): string | void {

    if(user.status === 'active' && user.role === 'admin') {
      console.log(`Usuário ${user.nome} Administrador => acesso permitir`);
    }else {
      console.log('Usuário Local. acesso permitido');
    }

    return 'User is active'

}

checkUserStatus(user)

interface User {
  id: string
  name: string
  email: string
}

interface UserFormCreate extends Omit<User, 'id'>{}

interface UserUpdateForm extends Omit< UserFormCreate, 'name' | 'email' > {
  id: String
  age?: number
  endress?: string
  name?: string
  email?: string
}

const userToBeEdit: UserUpdateForm = {
  id: '',
  name: 'Fabricio'
}