class utilsMethods {


generateRandomDate(from, to){
    const startDate = new Date(from); 
    const endDate = new Date(to); 
    const randomDate = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
    const day = String(randomDate.getDate()).padStart(2, '0');
    const month = String(randomDate.getMonth() + 1).padStart(2, '0');
    const year = randomDate.getFullYear();
    return `${day}/${month}/${year}`;
}
}
export default new utilsMethods()
