export function DefaultLanding() {
    return (
        <>
            <div className="container mx-auto">
                <h1 className="text-3xl font-extrabold text-center my-5">
                    Welcome to This is Not a Notion Blog
                </h1>

                <div className="w-4/6 mx-auto bg-gray-500">
                    <p className="text-lg text-white p-2 text-justify">
                        If you are seeing this page, it means you have just started your project,
                        or you have not set the required environment variables to get content from your
                        Notion pages. <b> Follow the guide below to complete your setup! </b>
                    </p>
                </div>

                <div className="prose prose-lg mt-10">
                    <h3>What is this?</h3>
                    <p>
                        You can use Notion as a content management system and combine it with Next.JS (and TailwindCSS)
                        to create a blog or other content website.
                    </p>
                    <h3>What's the point?</h3>
                    <p>
                        There are many things I liked about Notion, including its flexibility, integrations and ease of
                        use. However, while Notion is great to work with, its pages are not aesthetically pleasing.
                        Services allowing you to "publish" your Notion Page have too many limitations at the moment.
                    </p>
                    <p>
                        In short, if you can make a pretty website, you can use Notion as well!
                    </p>
                    <h3>Status of this Project</h3>
                    <p>
                        This uses the Notion API extensively. So, it is at least <b>Beta</b>.
                    </p>
                    <p>
                        <strong>Features Roadmap:</strong>
                        <ul>
                            <li>Grab pages from the post database and render them.</li>
                            <li>Grab the Main Page and render them.</li>
                        </ul>
                    </p>
                </div>
            </div>
        </>
    )
}