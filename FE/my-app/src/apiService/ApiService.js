import { BASE_URL } from "@/utils/Constant";
import { fetchGet, fetchPost } from "./Fetch";


export async function getAllCategory(){
    return fetchGet(BASE_URL + "api/category")
}

// export async function orcData(orcReq, token){
//     return fetchPost(BASE_URL + "real-id/v1/api-gateway/xthucgttt", orcReq, token)
// }