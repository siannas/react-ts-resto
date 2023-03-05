import React from "react"
import Project from "./project"

const data = [
    {
        title: 'React Todo List',
        date: 'React Js, Typescript',
        url: 'https://siannas.github.io/react-todo-ts/',
        desc: 'Aplikasi todo list untuk submisi pada Devcode Challenge',
        type: 'react',
    },
    {
        title: 'Blog Siannas',
        date: 'Gatsby Js',
        url: 'https://siannas.github.io/blog/',
        desc: 'Blog pribadi milik siannas untuk berbagai keperluan.',
        type: 'gatsby',
    },
    {
        title: 'Agrima.co.id Project',
        date: 'React Js, Redux, mySql',
        url: 'https://agrima.co.id',
        desc: 'Portal informasi dan konsultasi pemasaran agrikultur untuk mendukung laman web manajemen supply chain logis.co.id.',
        type: 'react',
    },
    {
        title: 'UniXcorp Company Portal',
        date: 'Lumen, PHP',
        url: 'https://unixcorpgamedev.id/',
        desc: 'Portal profil portfolio start-up gaming UniXcorp.',
        type: 'lumen',
    },
    {
        title: 'App Pembukuan Koperasi Daerah',
        date: 'Laravel, PHP, mySql',
        desc: 'Dasbor Admin untuk pengelolaan pembukuan Koperasi Daerah. Peran sebagai full-stack engineer.',
        type: 'laravel',
    },
    {
        title: 'Aplikasi Student Health Screening',
        date: 'Laravel, PHP, postgreSql',
        desc: 'Portal assessment kesehatan siswa sekolah.',
        type: 'laravel',
    },
    {
        title: 'College Final Project',
        date: 'Flask, Neo4j',
        desc: 'Dasbor Admin untuk melihat prediksi fraud.',
        type: 'flask',
    },
]

const Projects = () => {
    return (<section className="profile-projects col-md-6">
        <h4 className="my-4">Past Projects</h4>
        {
            data.map((x,i) => <Project key={i} data={x} />)
        }
        <div className="divider mt-5"></div>
    </section>)
}

export default Projects