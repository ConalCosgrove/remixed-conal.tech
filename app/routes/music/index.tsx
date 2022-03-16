import ArticleListItem from "~/article/article-list-item";

export default function MusicIndex() {
    return (
        <div className="article-list">
            <h1>Read!</h1>
            <ArticleListItem article={{title:"test article", slug:"This is to test my article component", id:"gdk1234", body:"this is the body of the article, it contains the entire text", imgUrl:"https://thumbs.dreamstime.com/b/happy-cat-closeup-portrait-funny-smile-cardboard-young-blue-background-102078702.jpg", views:5, date:new Date().toDateString(), alt:"A cute cat"}}/>
            <ArticleListItem article={{title:"test article", slug:"This is to test my article component", id:"5550123", body:"this is the body of the article, it contains the entire text", imgUrl:"https://thumbs.dreamstime.com/b/happy-cat-closeup-portrait-funny-smile-cardboard-young-blue-background-102078702.jpg", views:5, date:new Date().toDateString(), alt:"A cute cat"}}/>
            <ArticleListItem article={{title:"test article", slug:"This is to test my article component", id:"99392", body:"this is the body of the article, it contains the entire text", imgUrl:"https://thumbs.dreamstime.com/b/happy-cat-closeup-portrait-funny-smile-cardboard-young-blue-background-102078702.jpg", views:5, date:new Date().toDateString(), alt:"A cute cat"}}/>
            <ArticleListItem article={{title:"test article", slug:"This is to test my article component", id:"259236", body:"this is the body of the article, it contains the entire text", imgUrl:"https://thumbs.dreamstime.com/b/happy-cat-closeup-portrait-funny-smile-cardboard-young-blue-background-102078702.jpg", views:5, date:new Date().toDateString(), alt:"A cute cat"}}/>
        </div>
    )
}