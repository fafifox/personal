import React from 'react';
import ProjectImg from './ProjectImg';

const ProjectCard = ({ project }) => {
    return (
        <article className="flex-grow p-4 xl:flex-grow-0 lg:p-8 sm:w-full xl:w-1/2">
            <div className="flex flex-row p-1 transition duration-500 ease-in-out transform bg-white border-2 border-blue-500 hover:shadow-md hover:-translate-y-2 hover:border-opacity-100 hover:z-10">
                <div className="relative flex-none w-44">
                    <ProjectImg alt={project.title + " Screenshot"} filename={project.thumbnail} />
                </div>
                <div className="relative flex flex-col justify-center flex-1 w-3/5 p-4 xl:h-44">
                    <h3 className="box-border mb-2 text-lg font-medium leading-5 text-gray-800 break-words font-title xl:text-xl">{project.title}</h3>
                    <span className="inline-flex items-center mb-8 text-base font-normal leading-none text-gray-600">{project.description}</span>
                    <div className="absolute bottom-0 flex flex-row flex-wrap -mt-1 space-x-4">
                        {project.link && (
                            <a href={project.link} target="_blank" className="inline-flex items-center w-6 h-6 mb-2 text-sm font-normal leading-none text-blue-300 transition duration-500 ease-in-out transform hover:text-blue-500">
                                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                </svg>
                            </a>
                        )}
                        {project.github && (
                            <a href={project.github} target="_blank" className="inline-flex items-center w-6 h-6 mb-2 text-sm font-normal leading-none text-blue-300 transition duration-500 ease-in-out transform hover:text-blue-500">
                                <svg className="w-full h-full" fill="currentColor" role="img" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg">
                                    <title>GitHub icon</title>
                                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                                </svg>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </article>
    )
}

export default ProjectCard;