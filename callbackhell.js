// Callback Hell example
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if((id == 'chan' && password == 'hee') ||(id == 'coder' && password == 'academy')) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError){
        setTimeout(() => {
            if (user === 'chan'){
                onSuccess({name: 'chan', role: 'admin'});
            }else{
                onError(Error('no accesee'));
            }
        }, 1000);
    }
}

