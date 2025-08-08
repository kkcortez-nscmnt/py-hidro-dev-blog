import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="max-w-5l max-auto px-6 py-16 bg-gray-900">
      {/*INTRO */}
      <div className="flex flex-col md:flex-row md:items-start items-center gap-10 mb-12">
        <Image
          src="/images/profile.jpg"
          alt="profile"
          className="w-40 h-40 rounded-full object-cover border-4 border-blue-500 shadow-md"
          width={40}
          height={40}
        />
        <div>
          <h1 className="text-3xl font-bold mb-8">Olá, sou o Jamilson</h1>
          <p className="text-gray-300 text-lg">
            Engenheiro Agrícola - Centro de Engenharias CEng | Universidade
            Federal de Pelotas - UFPel. <br />
            Mestre em Recursos Hídricos - Centro de Desenvolvimento Tecnológico
            CDTec | Universidade Federal de Pelotas - UFPel. <br />
            Programador web | Instituto Federal de Ciências, Educação e
            Tecnologia do Rio Grande do Sul - IFSul.
          </p>
        </div>
      </div>
      {/*BIO */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-white mb-4">Compromisso</h2>
        <p className="text-gray-300 leading-relaxed">
          Unir engenharia, ciência de dados e desenvolvimento de software para a
          criação de soluções que transformem dados em informações úteis e
          aplicáveis. Buscando entregar resultados com precisão técnica,
          eficiência e clareza.
        </p>
      </div>
      {/*Tech Stack */}
      <h2 className="text text-2xl font-semibold text-white mb-4">
        Tecnologias e Ferramentas
        <ul className="flex flex-wrap mt-4 gap-4 text-sm text-gray-300">
          {[
            "Python",
            "Java Script",
            "Django",
            "React",
            "Next.js",
            "Vite",
            "React-Router",
            "SQL",
            "NoSQL",
            "Power BI",
            "Excel",
          ].map((tech) => (
            <li key={tech} className="bg-gray-700 px-3 py-1 rounded-md">
              {tech}
            </li>
          ))}
        </ul>
      </h2>
    </div>
  );
};

export default AboutPage;
