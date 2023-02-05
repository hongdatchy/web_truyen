import Head from "next/head";
import {
  AppstoreOutlined,
  ContainerOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  MenuUnfoldOutlined,
  DesktopOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { Button, Menu, Input } from "antd";
import { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import { useWindowWide } from "../src/js/utils/Util";
import { getAllCategory } from "@/js/apiService/ApiService";
import { Row, Col } from 'antd';
import { useRouter } from 'next/router';




export default function Home() {
  return (
    <>
      
    </>
  );
}
export async function getServerSideProps() {
  let listCategory = await getAllCategory();
  return {
    props: {
      listCategory,
    },
  };
}

