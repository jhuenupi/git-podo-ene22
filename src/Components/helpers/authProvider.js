// in src/authProvider.js
const authProvider = {
    login: ({username, password}) => {
        const request = new Request('http://localhost:1337/auth/local', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: new Headers({'Content-Type': 'application/json'}),
        });
        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(auth => {
                localStorage.setItem('auth', JSON.stringify(auth));
            });
    },
    checkAuth: (...params) => {
        return Promise.resolve();
    },
    getPermissions: () => {
        return Promise.resolve();
    }
};
export default authProvider;