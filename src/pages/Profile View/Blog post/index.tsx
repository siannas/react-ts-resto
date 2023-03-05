import React from "react"
import Post from "./post"

const data = [
    {
        title: 'Happy Glass Clone Pt 2',
        date: 'Dec 27, 2022',
        url: 'https://siannas.github.io/blog/2022/12/27/happy-glass-clone-pt-2/',
    },
    {
        title: 'Happy Glass Clone Pt 1',
        date: 'Dec 22, 2022',
        url: 'https://siannas.github.io/blog/2022/12/22/happy-glass-clone-pt-1/',
    },
    {
        title: 'Squad Condition dalam Gim Heisters',
        date: 'Dec 12, 2022',
        url: 'https://siannas.github.io/blog/2022/12/12/squad-condition-dalam-gim-heisters/',
    },
    {
        title: 'Squad Condition dalam Gim Heisters',
        date: 'Dec 08, 2022',
        url: 'https://siannas.github.io/blog/2022/12/08/hierarichal-finite-state-machine-di-game-heisters/',
    },
]

const BlogPost = () => {
    return (<section className="profile-blogs col-md-6">
        <h4 className="my-4">Blog Posts</h4>
        {
            data.map((x,i) => <Post key={i} data={x} />)
        }
        <div className="divider mt-5"></div>
    </section>)
}

export default BlogPost