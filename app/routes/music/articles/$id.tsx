import { useLoaderData } from "remix"
import type { LoaderFunction } from "remix"

import Article from "~/article";
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

export const loader: LoaderFunction = ({params}) => {
    if (!params) {
        return null;
    }
    const { id } = params;
    return {
        id,
        title: 'My Music Article',
        slug: 'Looking back at an old logic project',
        date: new Date().toLocaleString(),
        body: `Today I'm looking back at a project I worked on in 2016. A cover of Biffy Clyro's "Rearrange". This song always stuck out as a bit strange on their album elipsis`,
        imgUrl: 'https://i1.sndcdn.com/artworks-000182922314-wybu3f-t500x500.jpg',
        alt: 'A guitar resting against a desk, which has a laptop with digital audio software on it.',
        views: 0
    }
}

export default function ArticleRoute() {
    const data = useLoaderData<ArticleData>();
    return (<Article article={data}/>)
}