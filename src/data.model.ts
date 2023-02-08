export enum UserAccountType {
    NORMAL = 'normal',
    PREMIUM = 'premium'
}

export const DataModel: Data = {
    user: [
        // {
        //     id: 0,
        //     name: "Arjun V Nair",
        //     email: "arjunvnair@gmail.com",
        //     userType: UserAccountType.NORMAL
        // },
        // {
        //     id: 0,
        //     name: "Jishnu Mohan",
        //     email: "vishnu@gmail.com",
        //     userType: UserAccountType.PREMIUM
        // },
        // {
        //     id: 0,
        //     name: "Vishnu Prasad",
        //     email: "vishnu@gmail.com",
        //     userType: UserAccountType.NORMAL
        // },
    ]
}




interface Data {

    user: {
        id: string
        name: string
        email?: string
        userType: UserAccountType
        created_at : Date
        updated_at : Date
        
    }[]
}