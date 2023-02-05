import { useRouter } from "next/router";
import { useEffect } from "react";
import { getAllCategory, getAllComicByCategoryId } from "@/js/apiService/ApiService";
import { GetServerSideProps } from "next";
import ListComicCard from "@/js/components/ListComicCard";

export default function Category({ listCategory, listComic }) {
  const router = useRouter();
  // useEffect(() => {
  //   console.log(listComic);
  // }, [router]);

  return (
      <ListComicCard listComic={listComic}/>
  );
}

export async function getServerSideProps({ query }) {
  let listCategory = await getAllCategory()
  let listComic = await getAllComicByCategoryId(query.categoryId)


  return {
    props: {
      listCategory, listComic
    },
  };
}
