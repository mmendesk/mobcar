import { CreateUserInput } from 'src/user/dto/create-user.input';
import { UpdateUserInput } from 'src/user/dto/update-user.input';
import { User } from './../../user/user.entity';


export const mockAddAccountParams: CreateUserInput = {
    name: 'Test User',
    email: 'user@email.com',
    password: '123123',
    cpf: '03407765221',
    phone: '888726478',
    dateBirth: '12/12/1990'
};

export const mockUpdateUserParams: UpdateUserInput = {
    id: '2',
    email: 'email-updated@email.com',
};

export const mockUserModel: User = {
    id: '1',
    ...mockAddAccountParams,
};

export const mockUpdatedUserModel: User = {
    ...mockUserModel,
    email: 'updated-email@email.com',
};

export const mockUserArrayModel: User[] = [
    mockUserModel,
    {
        id: '2',
        name: 'Test User 2',
        email: 'email2@email.com',
        password: '123123',
        cpf: '03407765221',
        phone: '888726478',
        dateBirth: '12/12/1990'
    },
    {
        id: '3',
        name: 'Test User 3',
        email: 'email3@email.com',
        password: '123123',
        cpf: '03407765221',
        phone: '888726478',
        dateBirth: '12/12/1990'
    },
];