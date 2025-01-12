import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import { GetServerSideProps } from "next";
import { Experience, PageInfo, Project, Skill, Social } from "../typings";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchExperiences } from "../utils/fetchExperience";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchProjects } from "../utils/fetchProjects.ts";
import { fetchSocial } from "../utils/fetchSocials";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({ pageInfo, experiences, projects, skills, socials }: Props) => {
  return (
    <>
      <div className="bg-black/90 text-white h-screen snap-y snap-mandatory overflow-scroll z-0 overflow-y-scroll overflow-x-hidden  scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-stone-300">
        <Head>
          <title>Nihat Aaaaaaaaaaaaaaaaaaaaa Portfolio</title>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-FR5LZ3T3WD"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-FR5LZ3T3WD');
              `,
            }}
          />
        </Head>
        <Header />
        <section id="hero" className="snap-start">
          <Hero pageInfo={pageInfo} />
        </section>
        <section id="about" className="snap-center">
          <About pageInfo={pageInfo} />
        </section>
        <section id="experience" className="snap-center">
          <WorkExperience experiences={experiences} />
        </section>
        <section id="skills" className="snap-start">
          <Skills skills={skills} />
        </section>
        <section id="projects" className="snap-start">
          <Projects projects={projects} />
        </section>
        <section id="contact" className="snap-start">
          <Contact />
        </section>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const pageInfo: PageInfo = (await fetchPageInfo()) || null;
  const experiences: Experience[] = (await fetchExperiences()) || null;
  const skills: Skill[] = (await fetchSkills()) || null;
  const projects: Project[] = (await fetchProjects()) || null;
  const socials: Social[] = (await fetchSocial()) || null;

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      socials,
      projects,
    },
  };
};

export default Home;
