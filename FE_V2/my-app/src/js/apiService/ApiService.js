import { fetchGet, fetchPost } from "./Fetch";
import { BASE_URL } from '../utils/Constant';


export async function getAllCategory(){
    return fetchGet(BASE_URL + "api/category")
}

export async function getAllComicByCategoryId(id){
    return fetchGet(BASE_URL + "api/comic/"+id)
}

export async function getListChapterByNameComic(nameComic){
    return fetchGet(BASE_URL + "api/listChapter/"+nameComic)
}

