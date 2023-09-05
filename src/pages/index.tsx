import React, {useState } from "react";
import { P, Tag, Rating } from "@/components";
import { withLayout } from "@/layout/Layout";
import { GetStaticProps } from "next";
import axios from "axios";
import { MenuItem } from "@/interfaces/main.interface";

function Home({menu}:HomeProps): JSX.Element {
  
  const [rating, setRating] = useState<number>(2);

  return (
    <>
      <P size="m">Выше указаны программы Adobe InDesign, Adobe Illustrator, Corel Draw и ими можно успешно пользоваться дома или в дороге. Современные ноутбуки хорошо справляются с нагрузкой, так зачем загонять специалиста в душный офис. В этой профессии важным считается вдохновение, поэтому дизайнеры ищут его в разных местах.</P>
      <Tag color="ghost">Ghost</Tag>
      <Tag color="red">Red</Tag>
      <Tag color="grey">10</Tag>
      <Tag color="green">Green</Tag>
      <Tag color="primary" size="m" href='https://google.com'>Primary</Tag>
      <Rating rating={rating} isEditable={true} setRating={setRating}/>
      
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async ()=> {
  const firstCategory = 0;

  const { data:menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN +'/api/top-page/find', {
    firstCategory
  });


  return {
    props : {
      menu,
      firstCategory
    }
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
