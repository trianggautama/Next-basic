import { data } from "autoprefixer";
import Head from "next/head";
import { useRouter } from "next/router";

const Article = ({article}) => {

    const router = useRouter();
    const id     = router.query.id;

    return (
        <div>
            <Head>
                <title>
                Course | Article Single
                </title>
            </Head>
            <h1 className="text-2xl text-blue-400 mt-1 mb-2">Single Article {article.title}</h1>
            <p>{article.body}</p>
        </div>
    );
}

export default Article;

export async function getStaticProps({params}){
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const article = await response.json();

    return {
        props : {
            article 
        },
    }
}

export async function getStaticPaths(){
    const response  = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
    const data      = await response.json();

    return {
        fallback: false,
        paths: data.map(article =>(
            {
            params : { id : article.id.toString() }
            }
        ))
    }        
}
