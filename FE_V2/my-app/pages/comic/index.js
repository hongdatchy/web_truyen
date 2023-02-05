import { useRouter } from "next/router";
import { useEffect } from "react";
import { getAllCategory, getListChapterByNameComic } from "@/js/apiService/ApiService";

export default function comic({ listCategory, listChapter }) {
    const router = useRouter();
    useEffect(() => {
      console.log(listChapter);
    }, [router]);

    return (
        <>
            
        </>
    );
}

export async function getServerSideProps({ query }) {
    let listCategory = await getAllCategory()
    let listChapter = await getListChapterByNameComic(JSON.parse(query.comicInfo).name)
  
    return {
      props: {
        listCategory, listChapter
      },
    };
  }