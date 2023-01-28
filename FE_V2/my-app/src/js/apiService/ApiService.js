import { fetchGet, fetchPost } from "./Fetch";
import { BASE_URL } from '../utils/Constant';


export async function getAllCategory(){
    return fetchGet(BASE_URL + "api/category")
}

