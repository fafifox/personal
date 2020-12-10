import React from 'react';
import { projectsData } from "../mock/data";
import ProjectCard from './ProjectCard';


function App() {

    return (
        <main className="flex flex-col lg:flex-row">
            <div className="flex w-full lg:w-1/2 xl:w-1/3 min-h-screen h-full px-4">
                <div className="block m-auto">
                    <h1 className="mb-16 text-5xl font-extrabold tracking-tight leading-relaxed">
                        <span className="pr-4 text-white highlight-title inline">Hello, <br />I'm Hugo Malatrait</span>
                    </h1>
                    <p className="text-lg font-normal leading-loose py-1 pl-2 text-white highlight inline text-justify">
                        I am a developer passionate about computer sciences innovation, I'm always up for learning and practicing new things.
                        I am interested in domains like networking, cyber security, video games, streaming platform, cloud computing, blockchains and decentralization.
                    </p>
                    <div className="flex flex-col space-y-4 text-lg text-white mt-12">
                        <a className="flex flex-wrap items-cente" href="mailto:hello@hugomalatrait.com" target="_blank" rel="noreferrer">
                            <div className="bg-blue-500 inline-flex px-2 space-x-2">
                                <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <title>Mail icon</title>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span className="font-normal underline">hello@hugomalatrait.com</span>
                            </div>
                        </a>
                        <a className="flex flex-wrap items-center" href="https://github.com/fafifox" target="_blank" rel="noreferrer">
                            <div className="bg-blue-500 inline-flex px-2 space-x-2">
                                <svg className="w-8 h-8 p-1" fill="currentColor" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <title>GitHub icon</title>
                                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                                </svg>
                                <span className="font-normal underline">Github</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex w-full lg:w-1/2 xl:w-2/3">
                <div className="min-h-screen h-full p-2 py-16 flex flex-wrap bg-white lg:max-h-screen">
                    <div className="lg:h-full lg:overflow-y-auto flex flex-wrap w-full items-center">
                        <div className="flex flex-wrap w-full">
                            <div className="flex w-full justify-center">
                                <h2 className="sm:text-3xl text-2xl font-bold font-title text-white highlight p-1">Completed Projects  :</h2>
                            </div>
                            {projectsData.map((projectsData) => (
                                <ProjectCard key={projectsData.id} project={projectsData} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default App;