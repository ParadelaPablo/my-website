
export default function About() {
  return (
<section id="about" className="scroll-mt-16">
  <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
    <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
      About
    </h2>
  </div>
  <div className="flex flex-col gap-4">
    <p className="text-start text-muted-foreground lg:px-6">
      <span className="text-primary dark:text-white">Full Stack Java Developer</span> with expertise in{' '}
      <a
        className="no-wrap text-primary dark:text-white"
        href="https://www.java.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Java
      </a>,{' '}
      <a
        className="no-wrap text-primary dark:text-white"
        href="https://spring.io/projects/spring-boot"
        target="_blank"
        rel="noopener noreferrer"
      >
        Spring Boot
      </a>, and{' '}
      <a
        className="no-wrap text-primary dark:text-white"
        href="https://react.dev"
        target="_blank"
        rel="noopener noreferrer"
      >
        React
      </a>, specializing in building scalable and user-focused solutions. Skilled in creating{' '}
      <span className="text-primary dark:text-white">robust applications</span> with efficient architectures and{' '}
      <span className="text-primary dark:text-white">intuitive designs</span>, delivering high-quality results in dynamic and demanding environments.
    </p>
    <p className="text-start text-muted-foreground lg:px-6">
      Experienced in integrating frontend and backend technologies to develop efficient platforms that address real-world needs. Strong problem-solving abilities,{' '}
      <span className="text-primary dark:text-white">attention to detail</span>, and effective multitasking. Background in journalism enhances{' '}
      <span className="text-primary dark:text-white">communication and organizational skills</span>, fostering collaboration and a deep understanding of user requirements.
    </p>
  </div>
</section>
  );
}
