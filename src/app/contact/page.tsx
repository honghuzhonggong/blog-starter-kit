import Container from "@/app/_components/container";
import Header from "@/app/_components/header";


export default function Contact() {
  return (
    <main>
      <Container>
        <Header />
        <article className="mb-32">
          <h1 className="text-5xl font-bold mb-12">
            Contact Us
          </h1>
          <div className="text-lg leading-relaxed max-w-2xl mx-auto">
            <p>You can reach out to us through: </p>
            <ul className="list-disc pl-5 my-4">
              <li>Email: support@translatech.com</li>
              <li>Twitter: @Translatech</li>
            </ul>
          </div>
        </article>
      </Container>
    </main>
  );
}

