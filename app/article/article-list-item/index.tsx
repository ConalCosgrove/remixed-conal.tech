import { Link } from "react-router-dom"
type ArticleData = {
    id: string,
    title: string,
    slug: string,
    date: string,
    body: string,
    imgUrl: string,
    alt: string,
    views: number,
}

type ArticleProps = {
    article: ArticleData,
}



export default function ArticleListItem({article}: ArticleProps) {
    const {id, title, slug, date, body, imgUrl, alt, views} = article;
    return (
        <div className="article-list-item" key={id}>
            <div className="article-text-section">
                <p id="date-text">{date}</p>
                <Link to={`/music/articles/${id}`}><h1>{title}</h1></Link>
                <h3>{slug}</h3>
                <p>{body}</p>
                <p>Views: {views}</p>
            </div>
            <div className="article-image-section">
                <img src={imgUrl} alt={alt}/>
            </div>
        </div>
    )
}