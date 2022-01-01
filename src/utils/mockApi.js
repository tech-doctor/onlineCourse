export const userLogin = async ({ email, password }) => {
    return new Promise ((resolve, reject) => {
        setTimeout( () => {
            if(email === 'hilghsilk2damson@gmail.com' && password === '123456'){
                resolve();
               // console.log('done')
            } else{
                reject();
            }
        }, 3000);
    });
};