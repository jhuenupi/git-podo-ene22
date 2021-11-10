
const getUser = async  () => {
    const url = "http://localhost:1337/usuariospods?email=jjhh@gmail.coms";
    const res = await fetch(url);
    const userpod = await res.json();

    return userpod;
}

export default getUser;