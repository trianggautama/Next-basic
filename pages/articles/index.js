import Head from "next/head";
import Article from "../../components/article";

const index = ({articles}) => {
    return (
        <div>
            <Head>
                <title>
                    Course | Articles
                </title>
            </Head>
            <h1 className="text-5xl text-blue-400 mt-1 mb-2">Articles Page</h1>
            {articles.map((article)=>{
                return (
                    <Article article={article}></Article>
                )
            })}
        </div>
    );
}

export default index;

export async function getServerSideProps(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const articles = await response.json();

    return {
        props : {
            articles
        }
    }
}