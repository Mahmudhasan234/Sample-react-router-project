const LoadDataFromApi = async ()=> {
    const loadData = await fetch(' https://raw.githubusercontent.com/ProgrammingHero1/t-shirt-data/main/tshirt.json')
    const responseData = await loadData.json();
    console.log(responseData)
    return responseData;

}
export default LoadDataFromApi;