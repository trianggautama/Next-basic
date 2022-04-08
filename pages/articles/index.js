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
            <h1 className="text-2xl truncate text-blue-400">Article Page</h1>
            {articles.map((article)=>{
                return (
                    <Article article={article}></Article>
                )
            })}
        </div>
    );
}

export default index;

export async function getStaticProps(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = response.json();

    return {
        props : {
            articles :await data
        }
    }
}