"use client";

import profilePic from "@/assets/profile.png";
import { checkLogin } from "@/utils/login";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => checkLogin(router, "/"), [router]);

  return (
    <div className="mt-4 mb-4 w-[800px] max-w-full mx-auto flex flex-col items-center justify-center">
      <div className="mt-1 grid grid-cols-2 gap-5 border-2 rounded-[10px] p-2">
        <div className="flex flex-col gap-4 border rounded-[10px] p-4 bg-white">
          {/* image */}
          <section className="flex justify-center items-center">
            <Image
              src={profilePic}
              alt="Profile"
              className="w-75 h-75 object-cover rounded-xl shadow-sm"
            />
          </section>

          {/* details */}
          <section className="text-center sm:text-left">
            <p className="text-md leading-relaxed text-slate-800">
              <b className="text-lg block mb-2 text-black-600">
                68121995, ชูถิ่น ใจแก้ว
              </b>
              <span className="font-medium">Computer Science and Software</span>
              <br />
              Development Innovation : ( <b>CSI</b> )<br />
              School of Information Technology : ( <b>SIT</b> )<br />
              Sripatum University : ( <b>SPU</b> ) <br />
            </p>
          </section>
        </div>

        <div>
          <h1 className="font-bold mt-2 text-2xl">About Me</h1>
          <p className="text-slate-600 leading-relaxed text-sm mb-4"></p>

          <ul className="space-y-3 text-sm text-slate-600">
            <li className="flex items-start gap-2">
              <span className="text-indigo-500 mt-1">🚀</span>
              <span>
                <strong className="text-slate-900">Core Expertise:</strong>{" "}
                Passionate about building robust applications with a strong,
                practical background in full-stack software development,
                cybersecurity principles, and IoT systems.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-500 mt-1">💼</span>
              <span>
                <strong className="text-slate-900">Hands-on Experience:</strong>{" "}
                Proven ability to handle real-world IT infrastructure, having
                successfully deployed 60 workstations and configured secure
                network systems during technical internships.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-500 mt-1">🏆</span>
              <span>
                <strong className="text-slate-900">Achievement:</strong> Winner
                of a CTF Cybersecurity challenge competition.
              </span>
            </li>
          </ul>
          <h1 className="font-bold mt-4 text-2xl">Professional Goal</h1>
          <p className="text-slate-600 leading-relaxed text-sm">
            To step into a role as a DevSecOps or Security Engineer where I can
            combine my passion for software development with advanced security
            practices. I am eager to bridge the gap between development and
            operations by integrating automated security into CI/CD pipelines,
            building secure and high-performance solutions, and continuously
            learning new technologies to tackle modern cybersecurity landscapes.
          </p>
        </div>
      </div>
    </div>
  );
}
