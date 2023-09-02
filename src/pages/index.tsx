import React, {useState } from "react";
import { P, Tag, Rating } from "@/components";
import { withLayout } from "@/layout/Layout";

function Home(): JSX.Element {
  
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
