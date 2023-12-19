

const Page = ({ params }) => {
    const { slug } = params;
console.log('slug', slug);
    if (params.slug?.length === 2) {
        return <div>
            Display something for slug {slug?.[0]}
            {slug.length === 2 && <p>Display something for slug length 2</p>}
        </div>
        
    } else if (params.slug?.length === 1) {
        return (
            <div>
                 Display something for slug {slug.length}
                {slug.length === 1 && <p>Display something for slug length 1</p>}
            </div>
        );
    } else {
        return <h1>Docs Home Page</h1>;
    }
}


export default Page;
