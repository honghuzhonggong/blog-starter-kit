import Container from "@/app/_components/container";
import { EXAMPLE_PATH } from "@/lib/constants";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 dark:bg-slate-800">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center justify-between">

          {/* 左侧：标语或版权 */}
          <div className="lg:w-1/2 mb-10 lg:mb-0 text-center lg:text-left">
            <h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center mb-2">
              Power by TRANSLATECH.
            </h3> 
            <p className="text-gray-500 text-lg">
              © 2026 All rights reserved.
            </p>
          </div>

          {/* 右侧：链接组 */}
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2 gap-6">
            <a
              href="https://nextjs.org/docs"
              className="bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 duration-200 transition-colors"
            >
              Documentation
            </a>
            <a
              href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
              className="mx-3 font-bold hover:underline"
            >
              View on GitHub
            </a>

            {/* 一些普通的文字链接 */}
            <div className="flex flex-col lg:flex-row gap-4 font-bold">
              <Link href="/privacy" className="hover:underline">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:underline">
                Terms of Service
              </Link>
              <Link href="/contact" className="hover:underline">
                Contact Us
              </Link>
            </div>
      
            {/* <a
              href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
              className="mx-3 font-bold hover:underline"
            >
              View on GitHub
            </a> */}
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
