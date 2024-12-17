import { useState } from "react";
import image from "/filter.webp";
import Card from "./Card";
import { dataPolitics } from "./data";
import CardContainer from "./CardContainer";

interface CardData {
  title: string;
  color: string;
  content: string;
  borderBackground: string;
  level: number;
  totalSeries: number;
  seriesPosition: number;
  imageSrc?: string
}


function CardRendering () {
    const [borderBackground , setBorderBackground] = useState<string>("#C542D7");
    const [color , setColor] = useState<string>("#35A738");
    const [title , setTitle] = useState<string>("Pomyad");
    const [content , setContent] = useState<string>("Ceci est un contenu pour montrer que ca marche mdr");
    return (
        <div className="h-screen flex flex-col gap-9 items-center justify-center p-10">
            <div className="card bg-base-300 w-96 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Settings</h2>
                <label className="flex items-center gap-1">
                  border color
                  <input
                    type="color"
                    value={borderBackground}
                    onChange={(e) => setBorderBackground(e.target.value)}
                  />
                </label>
                <label className="flex items-center gap-1">
                  Color
                  <input
                    type="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                  />
                </label>
                <label className="flex items-center gap-1">
                  title
                  <input
                    type="text"
                    className="input input-bordered w-full max-w-xs"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </label>
                <label className="flex items-center gap-1">
                  content
                  <input
                    type="text"
                    className="input input-bordered w-full max-w-xs"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  />
                </label>
              </div>
            </div>


            <CardContainer>
              <Card
                imageSrc={image}
                title={title}
                color={color}
                content={content}
                borderBackground={borderBackground}
                level={5}
                totalSeries={20}
                seriesPosition={7}
                />
            </CardContainer>

            <div className="flex flex-row gap-6 [perspective:800px]">
              {dataPolitics.map(({title, color, content, borderBackground, level, totalSeries, seriesPosition, imageSrc}) => {
                console.log(imageSrc)
                return (
                  <Card
                    key={title}
                    imageSrc={imageSrc}
                    title={title}
                    color={color}
                    content={content}
                    borderBackground={borderBackground}
                    level={level}
                    totalSeries={totalSeries}
                    seriesPosition={seriesPosition}
                  />
                  );
                })}
              </div>


        </div>
    )
}

export default CardRendering;