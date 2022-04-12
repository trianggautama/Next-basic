import Head from "next/head";
import { Fragment } from "react";
import Article from "../../components/article";

const index = ({articles}) => {
    return (
        <Fragment>
            <Head>
                <title>
                    Course | Articles 
                </title>
            </Head>
            <h1 className="text-5xl text-blue-400 mt-1 mb-2">Articles Page {process.env.NEXT_PUBLIC_VARIABEL}</h1>
            {articles.map((article)=>{
                return (
                    <Article key={article.id} article={article}></Article>
                )
            })}
        </Fragment>
    );
}

export default index;

export async function getStaticProps(){
    const database = process.env.DB_DATABASE;

    console.log(database)
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const articles = await response.json();

    return {
        props : {
            articles
        },
        revalidate : 20
    }
}