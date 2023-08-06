const BASE_Url = 'https://my-json-server.typicode.com/skullbreakerr/e-storeAPI';
export const Fetcher = async (url) => {
  let responseObject = { errorMessage: '', data: [] };
  try {
    const response = await fetch(BASE_Url + url);
    const responseData = await response.json();
    responseObject.errorMessage = '';
    responseObject.data = responseData;
  } catch (error) {
    responseObject.errorMessage = error.message;
  }
  return responseObject;
};

export const getCategories = ()=>{
  return Fetcher('/categories');
}
export const getProducts = id =>{
  return Fetcher('/products?catId='+id);
}