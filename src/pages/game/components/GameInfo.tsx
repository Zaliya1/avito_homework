import {FunctionComponent} from "react";
import {GameInfoType} from "@/types";
import { Image, Carousel } from 'antd';
import "./GameInfo.css"

const GameInfo: FunctionComponent<GameInfoType> = (
    {title, releaseDate, publisher, developer, genre, img, screenshots, minimumSystemRequirements}
) => {
    return (
        <div className="game-info">
            <Image
                src={img}
                alt="Постер игры"
                className="game-info__img"
            />
            <h1>{title}</h1>
            <p>Дата релиза: {!!releaseDate && releaseDate.split("-").reverse().join(".")}</p>
            <p>Издатель: {publisher}</p>
            <p>Разработчик: {developer}</p>
            <p>Жанр: {genre}</p>
            <p>Системные требования: </p>
            {!!minimumSystemRequirements && <ul>
                <li>{minimumSystemRequirements.os}</li>
                <li>{minimumSystemRequirements.graphics}</li>
                <li>{minimumSystemRequirements.memory}</li>
                <li>{minimumSystemRequirements.storage}</li>
                <li>{minimumSystemRequirements.processor}</li>
            </ul>}

            <Carousel autoplay dotPosition="top">
                { !!screenshots && screenshots.map((screenshot) => {
                    return <Image key={screenshot.id} src={screenshot.image}/>
                })}
            </Carousel>
        </div>
    );
};

export default GameInfo;
