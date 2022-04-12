import Link from "next/link";

const article = ({article}) => {
    return (
        <Link href={`articles/${article.id}`}>
            <div>
                <div class="px-6 md:px-12 py-8 mb-8 bg-white border-3 border-indigo-900 rounded-2xl shadow-md">
                    <h4 class="text-2xl font-bold mb-10 md:mb-0">{article.title}</h4>
                    <p class="text-gray-400">{article.body}</p>
                </div>
            </div>
        </Link>
    );
}

export default article;