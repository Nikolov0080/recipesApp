export default (data) => {
    const isLogged = data.headers.hasOwnProperty('auth');
    console.log(`****** ${isLogged}`)
    
    if (isLogged) {
        document.cookie = "auth=" + data.headers.auth;
        return {
            status: "Status: OK",
            data: data.data
        }
    }

    return {
        status: "Error",
        data: data.data
    }

}