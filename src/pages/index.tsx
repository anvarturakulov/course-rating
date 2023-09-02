import React, { useEffect, useState } from "react";
import { Button, Htag, P, Tag, Rating } from "@/components";
import { Layout } from "@/layout/Layout";

export default function Home(): JSX.Element {
  
  const [rating, setRating] = useState<number>(2);

  return (
    <Layout>
      <P size="m">Выше указаны программы Adobe InDesign, Adobe Illustrator, Corel Draw и ими можно успешно пользоваться дома или в дороге. Современные ноутбуки хорошо справляются с нагрузкой, так зачем загонять специалиста в душный офис. В этой профессии важным считается вдохновение, поэтому дизайнеры ищут его в разных местах.</P>
      <Tag color="ghost">Ghost</Tag>
      <Tag color="red">Red</Tag>
      <Tag color="grey">10</Tag>
      <Tag color="green">Green</Tag>
      <Tag color="primary" size="m" href='https://google.com'>Primary</Tag>
      <Rating rating={rating} isEditable={true} setRating={setRating}/>
    </Layout>
  );
}
