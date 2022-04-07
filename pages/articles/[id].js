import { useRouter } from "next/router";

const SingleArticle = () => {

    const router = useRouter();
    const id     = router.query.id;

    return (
        <div>
            <Head>
                <title>
                Course | Article Single
                </title>
            </Head>
            <h1>Single Article {id}</h1>
        </div>
    );
}

export default SingleArticle;