import Link from "next/link";
import Image from "next/image";

const AboutPreview = () => {
  return (
    <section className="mt-12 p-10 flex flex-col md:flex-row items-center gap-8 bg-gray-900">
      <Image
        src="/images/profile.jpg"
        alt="profile"
        width={40}
        height={40}
        className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 shadow-md"
      />
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">
        PyHidroDev
        </h2>
        <p className="text-gray-200 mb-4 max-w 4xl">
          PyHidroDev surgiu em 2016 com intuito de prover automações em processos de tratamento de dados hidrológicos.
          Posteriormente o projeto se expandiu, abrangendo o desenvolvimento de aplicações web no contexto de subsidiar
          a gestão de recursos hídricos.
        </p>
        <Link href='/about' className="inline-block text-blue-400 hover:underline text-sm">
        Saiba mais 
        </Link>
      </div>
    </section>
  );
};

export default AboutPreview;
