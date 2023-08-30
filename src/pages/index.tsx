import React, { useEffect, useState } from "react";
import { Button, Htag, P, Tag, Rating } from "@/components";

export default function Home(): JSX.Element {
  
  const [counter, setCounter] = useState<number>(0);
  const [counter2, setCounter2] = useState<number>(0);


  useEffect(() => {
    console.log('Mount')
  },[]);
  
  useEffect(() => {
    console.log('All render')
  },);

  useEffect(() => {
    console.log('Effect for counter')
  },[counter]);

  
  useEffect(() => {
    return ()=> {
      console.log('Unmount');
    };
  },[]);
  

  return (
    <div>
      <Htag tag='h1'>{counter}</Htag>
      <Htag tag='h2'>{counter2}</Htag>
      <Button appearance='ghost' className="knopka" arrow="right" onClick={()=> setCounter(x=>++x)}>Dec</Button>
      <Button appearance='primary' arrow='down' onClick={()=> setCounter2(x=>--x)}>Кнопка</Button>
      <P size="m">Выше указаны программы Adobe InDesign, Adobe Illustrator, Corel Draw и ими можно успешно пользоваться дома или в дороге. Современные ноутбуки хорошо справляются с нагрузкой, так зачем загонять специалиста в душный офис. В этой профессии важным считается вдохновение, поэтому дизайнеры ищут его в разных местах.</P>
      <Tag color="ghost">Ghost</Tag>
      <Tag color="red">Red</Tag>
      <Tag color="grey">10</Tag>
      <Tag color="green">Green</Tag>
      <Tag color="primary" size="m" href='https://google.com'>Primary</Tag>

      <Rating rating={2}/>
    </div>
  );
}
