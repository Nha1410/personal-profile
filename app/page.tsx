import {
  Mail,
  MapPin,
  Phone,
  Github,
  Calendar,
  User,
  Award,
  BookOpen,
  Briefcase,
  Code,
  Heart,
  Info,
  Download,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/theme-toggle";
import { FloatingDownloadButton } from "@/components/floating-download-button";
import { AnimatedSection } from "@/components/animated-section";
import { AnimatedProgress } from "@/components/animated-progress";
import { AnimatedCard } from "@/components/animated-card";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 dark:text-gray-100">
      {/* Header/Hero Section */}
      <header className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 shadow-sm">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <AnimatedSection
            direction="down"
            className="flex flex-col md:flex-row items-center md:items-start gap-6"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 relative rounded-full overflow-hidden border-4 border-white shadow-md transition-transform duration-500 hover:scale-105">
              <Image
                src="/placeholder.svg?height=160&width=160"
                alt="Nha Le Thanh"
                width={160}
                height={160}
                className="object-cover"
                priority
              />
            </div>
            <div className="text-center md:text-left space-y-2 flex-1">
              <h1 className="text-3xl md:text-4xl font-bold animate-fade-in gradient-text">
                NHA LE THANH
              </h1>
              <h2
                className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 animate-fade-in"
                style={{ animationDelay: "200ms" }}
              >
                Back-end Developer
              </h2>

              <div
                className="flex flex-col sm:flex-row gap-3 mt-4 justify-center md:justify-start animate-fade-in"
                style={{ animationDelay: "400ms" }}
              >
                <div className="flex items-center gap-2 transition-transform hover:translate-x-1">
                  <Phone size={16} className="icon-blue" />
                  <span>0346783250</span>
                </div>
                <div className="flex items-center gap-2 transition-transform hover:translate-x-1">
                  <Mail size={16} className="icon-purple" />
                  <a
                    href="mailto:thanhnha141001@gmail.com"
                    className="hover:underline"
                  >
                    thanhnha141001@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2 transition-transform hover:translate-x-1">
                  <Github size={16} className="icon-indigo" />
                  <a
                    href="https://github.com/Nha1410"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    github.com/Nha1410
                  </a>
                </div>
              </div>

              <div
                className="flex gap-3 mt-2 justify-center md:justify-start animate-fade-in"
                style={{ animationDelay: "600ms" }}
              >
                <div className="flex items-center gap-2 transition-transform hover:translate-x-1">
                  <MapPin size={16} className="icon-red" />
                  <span>Binh Thanh, Ho Chi Minh</span>
                </div>
                <div className="flex items-center gap-2 transition-transform hover:translate-x-1">
                  <Calendar size={16} className="icon-green" />
                  <span>14/10/2001</span>
                </div>
                <div className="flex items-center gap-2 transition-transform hover:translate-x-1">
                  <User size={16} className="icon-teal" />
                  <span>Male</span>
                </div>
              </div>
            </div>
            <div
              className="hidden md:flex items-center gap-3 animate-fade-in"
              style={{ animationDelay: "800ms" }}
            >
              <ThemeToggle />
              <Button
                asChild
                className="bg-gradient-to-r from-theme-blue to-theme-purple hover:opacity-90 text-white transition-transform hover:scale-105"
              >
                <a href="mailto:thanhnha141001@gmail.com">Contact Me</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="flex items-center gap-2 transition-transform hover:scale-105 border-theme-blue text-theme-blue hover:text-theme-purple hover:border-theme-purple"
              >
                <a href="/Nha_Le_Thanh_CV.pdf" download="Nha_Le_Thanh_CV.pdf">
                  <Download size={16} />
                  Download CV
                </a>
              </Button>
            </div>
          </AnimatedSection>
          <div
            className="flex md:hidden justify-center mt-4 gap-3 animate-fade-in"
            style={{ animationDelay: "800ms" }}
          >
            <ThemeToggle />
            <Button
              asChild
              variant="outline"
              size="sm"
              className="flex items-center gap-2 transition-transform hover:scale-105 border-theme-blue text-theme-blue hover:text-theme-purple hover:border-theme-purple"
            >
              <a href="/cv/nha-le-thanh-cv.pdf" download="Nha_Le_Thanh_CV.pdf">
                <Download size={16} />
                Download CV
              </a>
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Objective Section */}
          <AnimatedSection delay={100}>
            <AnimatedCard className="border-t-4 border-theme-blue">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <Award size={20} className="icon-blue animate-pulse" />
                  Objective
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-sm text-theme-blue">
                      Short-term goals (1-2 years):
                    </h3>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                      <li className="transition-transform hover:translate-x-1">
                        Master the basic knowledge and skills of Backend
                        Developer, proficient in programming language Golang.
                      </li>
                      <li className="transition-transform hover:translate-x-1">
                        Become an active member of the development team,
                        effectively contributing to common projects.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-medium text-sm text-theme-purple">
                      Long-term goals (3-5 years):
                    </h3>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                      <li className="transition-transform hover:translate-x-1">
                        Become a professional Backend Developer, capable of
                        developing and maintaining complex backend applications.
                      </li>
                      <li className="transition-transform hover:translate-x-1">
                        Have in-depth knowledge of backend software
                        architectures, databases and distributed systems.
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </AnimatedCard>
          </AnimatedSection>

          {/* Skills Section */}
          <AnimatedSection delay={200}>
            <AnimatedCard className="border-t-4 border-theme-purple">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <Code
                    size={20}
                    className="icon-purple animate-bounce"
                    style={{ animationDuration: "3s" }}
                  />
                  Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <AnimatedProgress
                    label="PHP"
                    value={75}
                    // color="bg-theme-orange"
                  />
                  <AnimatedProgress
                    label="Golang"
                    value={90}
                    // color="bg-theme-blue"
                  />
                  <AnimatedProgress
                    label="English"
                    value={70}
                    // color="bg-theme-purple"
                  />
                  <AnimatedProgress
                    label="Git"
                    value={85}
                    // color="bg-theme-red"
                  />
                  <AnimatedProgress
                    label="SQL"
                    value={80}
                    // color="bg-theme-green"
                  />
                </div>
              </CardContent>
            </AnimatedCard>
          </AnimatedSection>

          {/* Education Section */}
          <AnimatedSection delay={300}>
            <AnimatedCard className="border-t-4 border-theme-green">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <BookOpen
                    size={20}
                    className="icon-green transition-transform hover:rotate-12"
                  />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <h3 className="font-bold">
                    HO CHI MINH CITY UNIVERSITY OF TECHNOLOGY
                  </h3>
                  <p className="text-sm text-gray-500">OCT 2019 - NOV 2023</p>
                  <p className="text-sm">
                    Major: Electronics and Telecommunications
                  </p>
                  <p className="text-sm">
                    GPA:{" "}
                    <span className="text-theme-green font-semibold">
                      7.48/10
                    </span>
                  </p>
                </div>
              </CardContent>
            </AnimatedCard>
          </AnimatedSection>

          {/* Interests Section */}
          <AnimatedSection delay={400}>
            <AnimatedCard className="border-t-4 border-theme-red">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <Heart
                    size={20}
                    className="icon-red animate-pulse"
                    style={{ animationDuration: "2s" }}
                  />
                  Interests
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li className="transition-transform hover:translate-x-1">
                    Travelling
                  </li>
                  <li className="transition-transform hover:translate-x-1">
                    Online courses
                  </li>
                  <li className="transition-transform hover:translate-x-1">
                    Music
                  </li>
                </ul>
              </CardContent>
            </AnimatedCard>
          </AnimatedSection>

          {/* Honors & Awards Section */}
          <AnimatedSection delay={500}>
            <AnimatedCard className="border-t-4 border-theme-yellow">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <Award
                    size={20}
                    className="icon-yellow transition-transform hover:scale-110"
                  />
                  Honors & Awards
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <p className="text-sm font-medium">
                      Received a scholarship for academic at university
                    </p>
                    <p className="text-sm text-theme-yellow font-semibold">
                      8-2021
                    </p>
                  </div>
                </div>
              </CardContent>
            </AnimatedCard>
          </AnimatedSection>

          {/* Certifications Section */}
          <AnimatedSection delay={600}>
            <AnimatedCard className="border-t-4 border-theme-cyan">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <Award
                    size={20}
                    className="icon-cyan transition-transform hover:rotate-12"
                  />
                  Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-1 transition-transform hover:translate-x-1">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium">
                        TOEIC 690 (Listening and reading)
                      </p>
                      <p className="text-sm text-theme-cyan font-semibold">
                        12-2022
                      </p>
                    </div>
                  </div>
                  <div className="space-y-1 transition-transform hover:translate-x-1">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium">
                        Received a certificate of completion for the Golang
                        Basic course
                      </p>
                      <p className="text-sm text-theme-cyan font-semibold">
                        9-2023
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </AnimatedCard>
          </AnimatedSection>
        </div>

        {/* Right Column (Main Content) */}
        <div className="md:col-span-2 space-y-6">
          {/* Work Experience Section */}
          <AnimatedSection direction="right">
            <AnimatedCard className="border-l-4 border-theme-blue">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-700 rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <Briefcase
                    size={20}
                    className="icon-blue transition-transform hover:rotate-12"
                  />
                  Work Experience
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Current Job */}
                <AnimatedSection delay={100} direction="right">
                  <div className="space-y-3">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                      <h3 className="font-bold text-lg text-theme-blue">
                        BACK-END DEVELOPER
                      </h3>
                      <Badge
                        className="w-fit mt-1 sm:mt-0 animate-pulse bg-theme-blue text-white"
                        style={{ animationDuration: "4s" }}
                      >
                        8/2024 - present
                      </Badge>
                    </div>
                    <p className="font-medium">TEL4VN Company</p>
                    <div>
                      <p className="font-medium text-sm">
                        Project: Quality Control Bot
                      </p>
                      <p className="font-medium text-sm mt-2 text-theme-blue">
                        Missions: Build a backend system that integrates with an
                        AI analysis service to score audio calls based on
                        quality criteria.
                      </p>
                      <p className="font-medium text-sm mt-2 text-theme-blue">
                        Technologies:
                      </p>
                      <ul className="list-disc pl-5 mt-1 space-y-1 text-sm">
                        <li className="transition-transform hover:translate-x-1 hover:text-theme-blue">
                          Golang - with Gin Framework
                        </li>
                        <li className="transition-transform hover:translate-x-1 hover:text-theme-blue">
                          ORM: Bun ORM
                        </li>
                        <li className="transition-transform hover:translate-x-1 hover:text-theme-blue">
                          Database: PostgreSQL, Elasticsearch
                        </li>
                        <li className="transition-transform hover:translate-x-1 hover:text-theme-blue">
                          Messaging Queue: RabbitMQ, RedisMQ
                        </li>
                        <li className="transition-transform hover:translate-x-1 hover:text-theme-blue">
                          Caching: Redis
                        </li>
                        <li className="transition-transform hover:translate-x-1 hover:text-theme-blue">
                          Architecture: Microservices
                        </li>
                      </ul>
                      <p className="font-medium text-sm mt-2 text-theme-blue">
                        Duties:
                      </p>
                      <ul className="list-disc pl-5 mt-1 space-y-1 text-sm">
                        <li className="transition-transform hover:translate-x-1 hover:text-theme-blue">
                          Develop and maintain a microservice-based system for
                          evaluating call quality. Write APIs for analyzing
                          audio transcripts, scoring criteria, and managing
                          QC-related configurations.
                        </li>
                        <li className="transition-transform hover:translate-x-1 hover:text-theme-blue">
                          Integrated third-party authentication services using
                          OAuth2 for secure user login.
                        </li>
                        <li className="transition-transform hover:translate-x-1 hover:text-theme-blue">
                          Implement real-time processing with RabbitMQ and Redis
                          for message queuing and caching.
                        </li>
                        <li className="transition-transform hover:translate-x-1 hover:text-theme-blue">
                          Containerized the application using Docker and
                          implemented CI/CD pipelines for automated testing,
                          building, and deployment.
                        </li>
                        <li className="transition-transform hover:translate-x-1 hover:text-theme-blue">
                          Developed features for importing and exporting data
                          via files (e.g., CSV, Excel)
                        </li>
                      </ul>
                    </div>
                  </div>
                </AnimatedSection>

                <Separator className="bg-gradient-to-r from-theme-blue to-theme-purple h-0.5" />

                {/* Previous Job */}
                <AnimatedSection delay={200} direction="right">
                  <div className="space-y-3">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                      <h3 className="font-bold text-lg text-theme-purple">
                        BACK-END DEVELOPER
                      </h3>
                      <Badge className="w-fit mt-1 sm:mt-0 bg-theme-purple text-white">
                        2/2023 - 8/2024
                      </Badge>
                    </div>
                    <p className="font-medium">VOYAGER INC</p>

                    {/* Project 1 */}
                    <div>
                      <p className="font-medium text-sm">
                        Project: SAAS backend company management (6/2023 -
                        8/2024)
                      </p>
                      <p className="font-medium text-sm mt-2 text-theme-purple">
                        Missions: Write APIs for employee shift management
                        project
                      </p>
                      <ul className="list-disc pl-5 mt-1 space-y-1 text-sm">
                        <li className="transition-transform hover:translate-x-1 hover:text-theme-purple">
                          Technologies: Golang - with fiber Framework
                        </li>
                        <li className="transition-transform hover:translate-x-1 hover:text-theme-purple">
                          ORM: Gorm, gorm.io
                        </li>
                        <li className="transition-transform hover:translate-x-1 hover:text-theme-purple">
                          PaaS: Google Cloud Platform (Cloud run, Cloud SQL)
                        </li>
                        <li className="transition-transform hover:translate-x-1 hover:text-theme-purple">
                          CI/CD: GitHub Action
                        </li>
                        <li className="transition-transform hover:translate-x-1 hover:text-theme-purple">
                          Database: PostgreSQL
                        </li>
                        <li className="transition-transform hover:translate-x-1 hover:text-theme-purple">
                          API Method: restAPI (with openAPI and oapi-generator)
                        </li>
                      </ul>
                      <p className="font-medium text-sm mt-2 text-theme-purple">
                        Duties:
                      </p>
                      <ul className="list-disc pl-5 mt-1 space-y-1 text-sm">
                        <li className="transition-transform hover:translate-x-1 hover:text-theme-purple">
                          Apply Clean Architecture software structure
                        </li>
                        <li className="transition-transform hover:translate-x-1 hover:text-theme-purple">
                          Write unit test (Table-driven tests)
                        </li>
                        <li className="transition-transform hover:translate-x-1 hover:text-theme-purple">
                          Practical knowledge of Google Cloud Platform
                          deployment
                        </li>
                        <li className="transition-transform hover:translate-x-1 hover:text-theme-purple">
                          How to write code clean, logical and scalability.
                        </li>
                        <li className="transition-transform hover:translate-x-1 hover:text-theme-purple">
                          Daily direct communication with customers in English
                        </li>
                        <li className="transition-transform hover:translate-x-1 hover:text-theme-purple">
                          Documented test results and worked on bug fixes to
                          improve system stability.
                        </li>
                      </ul>
                    </div>

                    {/* Project 2 */}
                    <div className="mt-4">
                      <p className="font-medium text-sm">
                        Project: Golang Clean Architecture (04/2023 - 06/2023)
                      </p>
                      <p className="font-medium text-sm mt-2 text-theme-green">
                        Missions: Proficient in Golang programming, data
                        structures, algorithms, and concurrency concepts.
                      </p>
                      <ul className="list-disc pl-5 mt-1 space-y-1 text-sm">
                        <li className="transition-transform hover:translate-x-1 hover:text-theme-green">
                          Technologies: Golang - with fiber Framework
                        </li>
                        <li className="transition-transform hover:translate-x-1 hover:text-theme-green">
                          ORM: Gorm, gorm.io
                        </li>
                        <li className="transition-transform hover:translate-x-1 hover:text-theme-green">
                          API Method: restAPI
                        </li>
                      </ul>
                      <p className="font-medium text-sm mt-2 text-theme-green">
                        Duties:
                      </p>
                      <ul className="list-disc pl-5 mt-1 space-y-1 text-sm">
                        <li className="transition-transform hover:translate-x-1 hover:text-theme-green">
                          Build well-structured RESTful APIs using Golang
                          frameworks like Fiber.
                        </li>
                        <li className="transition-transform hover:translate-x-1 hover:text-theme-green">
                          Implement secure user authentication with JWT in
                          Golang applications.
                        </li>
                        <li className="transition-transform hover:translate-x-1 hover:text-theme-green">
                          Employed Docker for containerization.
                        </li>
                        <li className="transition-transform hover:translate-x-1 hover:text-theme-green">
                          Write clean, logical, and scalable code following
                          Golang development best practices.
                        </li>
                      </ul>
                    </div>

                    {/* Project 3 */}
                    <div className="mt-4">
                      <p className="font-medium text-sm">
                        Project: Nursing Home Management System (02/2023 -
                        04/2023)
                      </p>
                      <p className="font-medium text-sm mt-2 text-theme-orange">
                        Missions: Maintained and developed a web-based system.
                      </p>
                      <p className="font-medium text-sm mt-2 text-theme-orange">
                        Technologies:
                      </p>
                      <ul className="list-disc pl-5 mt-1 space-y-1 text-sm">
                        <li className="transition-transform hover:translate-x-1 hover:text-theme-orange">
                          BE: PHP Laravel (Laravel 8)
                        </li>
                        <li className="transition-transform hover:translate-x-1 hover:text-theme-orange">
                          FE: VueJS (Vue2), TailwindCSS
                        </li>
                      </ul>
                      <p className="font-medium text-sm mt-2 text-theme-orange">
                        Knowledge:
                      </p>
                      <ul className="list-disc pl-5 mt-1 space-y-1 text-sm">
                        <li className="transition-transform hover:translate-x-1 hover:text-theme-orange">
                          Understanding Axios and Promise usage in VueJS
                        </li>
                        <li className="transition-transform hover:translate-x-1 hover:text-theme-orange">
                          UI design implementation based on provided designs
                        </li>
                        <li className="transition-transform hover:translate-x-1 hover:text-theme-orange">
                          Understanding how to make websites responsive for
                          different screen sizes
                        </li>
                        <li className="transition-transform hover:translate-x-1 hover:text-theme-orange">
                          Quickly identify and resolve system errors
                        </li>
                      </ul>
                    </div>
                  </div>
                </AnimatedSection>
              </CardContent>
            </AnimatedCard>
          </AnimatedSection>

          {/* Additional Skills Section */}
          <AnimatedSection delay={300} direction="right">
            <AnimatedCard className="border-l-4 border-theme-green">
              <CardHeader className="bg-gradient-to-r from-green-50 to-green-100 dark:from-gray-800 dark:to-gray-700 rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <Code
                    size={20}
                    className="icon-green transition-transform hover:rotate-12"
                  />
                  Additional Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  In addition to the mentioned above projects, I have also
                  worked on several small personal projects and gained
                  additional skills through assisting with other projects. These
                  include:
                </p>
                <ul className="list-disc pl-5 mt-3 space-y-1 text-sm">
                  <li className="transition-transform hover:translate-x-1 hover:text-theme-green">
                    Experience with Node.js (Express.js framework)
                  </li>
                  <li className="transition-transform hover:translate-x-1 hover:text-theme-green">
                    Knowledge of NoSQL databases
                  </li>
                  <li className="transition-transform hover:translate-x-1 hover:text-theme-green">
                    Experience using WebSockets (Pusher) for real-time
                    communication between client and server in a mini
                    Facebook-clone project.
                  </li>
                </ul>
              </CardContent>
            </AnimatedCard>
          </AnimatedSection>

          {/* Activities Section */}
          <AnimatedSection delay={400} direction="right">
            <AnimatedCard className="border-l-4 border-theme-red">
              <CardHeader className="bg-gradient-to-r from-red-50 to-red-100 dark:from-gray-800 dark:to-gray-700 rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <Heart
                    size={20}
                    className="icon-red animate-pulse"
                    style={{ animationDuration: "2s" }}
                  />
                  Activities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                    <h3 className="font-bold text-theme-red">
                      MEMBER OF BACH KHOA SOCIAL GROUP
                    </h3>
                    <Badge className="w-fit mt-1 sm:mt-0 bg-theme-red text-white">
                      2020-2023
                    </Badge>
                  </div>
                  <p className="font-medium text-sm">
                    Participated in Social Activities
                  </p>
                  <ul className="list-disc pl-5 mt-1 space-y-1 text-sm">
                    <li className="transition-transform hover:translate-x-1 hover:text-theme-red">
                      Take part in activities to help children in orphanages.
                    </li>
                  </ul>
                </div>
              </CardContent>
            </AnimatedCard>
          </AnimatedSection>

          {/* Additional Information Section */}
          <AnimatedSection delay={500} direction="right">
            <AnimatedCard className="border-l-4 border-theme-yellow">
              <CardHeader className="bg-gradient-to-r from-yellow-50 to-yellow-100 dark:from-gray-800 dark:to-gray-700 rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <Info
                    size={20}
                    className="icon-yellow transition-transform hover:rotate-12"
                  />
                  Additional Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li className="transition-transform hover:translate-x-1 hover:text-theme-yellow">
                    High responsibility, can work under pressure, ready for
                    field service in all nationwide, eager to learn.
                  </li>
                  <li className="transition-transform hover:translate-x-1 hover:text-theme-yellow">
                    Good at Teamwork skills.
                  </li>
                  <li className="transition-transform hover:translate-x-1 hover:text-theme-yellow">
                    Comprehension of English documents.
                  </li>
                  <li className="transition-transform hover:translate-x-1 hover:text-theme-yellow">
                    Can control and manage time on project.
                  </li>
                </ul>
              </CardContent>
            </AnimatedCard>
          </AnimatedSection>
        </div>
      </main>

      <footer className="bg-gradient-to-r from-theme-blue to-theme-purple text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Nha Le Thanh. All rights reserved.
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <Link
              href="mailto:thanhnha141001@gmail.com"
              className="hover:text-gray-300 transition-transform hover:scale-110"
            >
              <Mail size={18} />
              <span className="sr-only">Email</span>
            </Link>
            <Link
              href="https://github.com/Nha1410"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-transform hover:scale-110"
            >
              <Github size={18} />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="tel:0346783250"
              className="hover:text-gray-300 transition-transform hover:scale-110"
            >
              <Phone size={18} />
              <span className="sr-only">Phone</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
