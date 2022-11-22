

export function getHomes(homes) {
    return {
        type: 'GET-HOMES',
        payload: homes
    }
}

export function getRentHomes(home){
    return{
        type: 'GET-RENT-HOMES',
        payload: home
    }
}

export function getUser(user){
    return{
        type:'GET-USER',
        payload: user
    }
}