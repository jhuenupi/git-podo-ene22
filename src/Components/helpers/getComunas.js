const getComunas = async  () => {
    const url = "http://localhost:1337/comunas";
    const res = await fetch(url);
    const comunas = await res.json();

    return comunas;
}

export default getComunas;