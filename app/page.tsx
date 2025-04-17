import { Mail, MapPin, Phone, Github, Calendar, User, Award, BookOpen, Briefcase, Code, Heart, Info, Download } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ThemeToggle } from "@/components/theme-toggle"
import { FloatingDownloadButton } from "@/components/floating-download-button"
import { AnimatedSection } from "@/components/animated-section"
import { AnimatedProgress } from "@/components/animated-progress"
import { AnimatedCard } from "@/components/animated-card"

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 dark:text-gray-100">
      {/* Header/Hero Section */}
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <AnimatedSection direction="down" className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="w-32 h-32 md:w-40 md:h-40 relative rounded-full overflow-hidden border-4 border-gray-100 shadow-md transition-transform duration-500 hover:scale-105">
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
              <h1 className="text-3xl md:text-4xl font-bold animate-fade-in">NHA LE THANH</h1>
              <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 animate-fade-in" style={{ animationDelay: "200ms" }}>Back-end Developer</h2>

              <div className="flex flex-col sm:flex-row gap-3 mt-4 justify-center md:justify-start animate-fade-in" style={{ animationDelay: "400ms" }}>
                <div className="flex items-center gap-2 transition-transform hover:translate-x-1">
                  <Phone size={16} className="text-gray-500" />
                  <span>0346783250</span>
                </div>
                <div className="flex items-center gap-2 transition-transform hover:translate-x-1">
                  <Mail size={16} className="text-gray-500" />
                  <a href="mailto:thanhnha141001@gmail.com" className="hover:underline">
                    thanhnha141001@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2 transition-transform hover:translate-x-1">
                  <Github size={16} className="text-gray-500" />
                  <a
                    href="https://github.com/Nha1410"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    github.com/Nha1410
                  </a>
                </div>
                <div className="flex items-center gap-2 transition-transform hover:translate-x-1">
                  <MapPin size={16} className="text-gray-500" />
                  <span>Go Vap, Ho Chi Minh</span>
                </div>
              </div>

              <div className="flex gap-3 mt-2 justify-center md:justify-start animate-fade-in" style={{ animationDelay: "600ms" }}>
                <div className="flex items-center gap-2 transition-transform hover:translate-x-1">
                  <Calendar size={16} className="text-gray-500" />
                  <span>14/10/2001</span>
                </div>
                <div className="flex items-center gap-2 transition-transform hover:translate-x-1">
                  <User size={16} className="text-gray-500" />
                  <span>Male</span>
                </div>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-3 animate-fade-in" style={{ animationDelay: "800ms" }}>
              <ThemeToggle />
              <Button
                asChild
                className="bg-gray-800 hover:bg-gray-700 dark:bg-gray-200 dark:text-gray-800 dark:hover:bg-gray-300 transition-transform hover:scale-105"
              >
                <a href="mailto:thanhnha141001@gmail.com">Contact Me</a>
              </Button>
              <Button asChild variant="outline" className="flex items-center gap-2 transition-transform hover:scale-105">
                <a href="/cv/nha-le-thanh-cv.pdf" download="Nha_Le_Thanh_CV.pdf">
                  <Download size={16} />
                  Download CV
                </a>
              </Button>
            </div>
          </AnimatedSection>
          <div className="flex md:hidden justify-center mt-4 gap-3 animate-fade-in" style={{ animationDelay: "800ms" }}>
            <ThemeToggle />
            <Button asChild variant="outline" size="sm" className="flex items-center gap-2 transition-transform hover:scale-105">
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
            <AnimatedCard>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <Award size={20} className="animate-pulse" />
                  Objective
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-sm text-gray-500">Short-term goals (1-2 years):</h3>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                      <li className="transition-transform hover:translate-x-1">
                        Master the basic knowledge and skills of Backend Developer, proficient in 2 programming languages
                        Golang and PHP.
                      </li>
                      <li className="transition-transform hover:translate-x-1">
                        Become an active member of the development team, effectively contributing to common projects.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-medium text-sm text-gray-500">Long-term goals (3-5 years):</h3>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                      <li className="transition-transform hover:translate-x-1">
                        Become a professional Backend Developer, capable of developing and maintaining complex backend
                        applications.
                      </li>
                      <li className="transition-transform hover:translate-x-1">
                        Have in-depth knowledge of backend software architectures, databases and distributed systems.
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </AnimatedCard>
          </AnimatedSection>

          {/* Skills Section */}
          <AnimatedSection delay={200}>
            <AnimatedCard>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <Code size={20} className="animate-bounce" style={{ animationDuration: "3s" }} />
                  Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <AnimatedProgress label="PHP" value={85} />
                  <AnimatedProgress label="Golang" value={90} />
                  <AnimatedProgress label="VueJS" value={75} />
                  <AnimatedProgress label="English" value={70} />
                  <AnimatedProgress label="Git" value={85} />
                  <AnimatedProgress label="SQL" value={80} />
                  <AnimatedProgress label="HTML5, CSS3, JS" value={75} />
                </div>
              </CardContent>
            </AnimatedCard>
          </AnimatedSection>

          {/* Education Section */}
          <AnimatedSection delay={300}>
            <AnimatedCard>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <BookOpen size={20} className="transition-transform hover:rotate-12" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <h3 className="font-bold">HO CHI MINH CITY UNIVERSITY OF TECHNOLOGY</h3>
                  <p className="text-sm text-gray-500">OCT 2019 - NOV 2023</p>
                  <p className="text-sm">Major: Electronics and Telecommunications</p>
                  <p className="text-sm">GPA: 7.48/10</p>
                </div>
              </CardContent>
            </AnimatedCard>
          </AnimatedSection>

          {/* Interests Section */}
          <AnimatedSection delay={400}>
            <AnimatedCard>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <Heart size={20} className="text-red-500 animate-pulse" style={{ animationDuration: "2s" }} />
                  Interests
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li className="transition-transform hover:translate-x-1">Travelling</li>
                  <li className="transition-transform hover:translate-x-1">Online courses</li>
                  <li className="transition-transform hover:translate-x-1">Music</li>
                </ul>
              </CardContent>
            </AnimatedCard>
          </AnimatedSection>

          {/* Honors & Awards Section */}
          <AnimatedSection delay={500}>
            <AnimatedCard>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <Award size={20} className="text-yellow-500 transition-transform hover:scale-110" />
                  Honors & Awards
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <p className="text-sm font-medium">Scholarship for academic excellence</p>
                    <p className="text-sm text-gray-500">8-2021</p>
                  </div>
                </div>
              </CardContent>
            </AnimatedCard>
          </AnimatedSection>

          {/* Certifications Section */}
          <AnimatedSection delay={600}>
            <AnimatedCard>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <Award size={20} className="text-blue-500 transition-transform hover:rotate-12" />
                  Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-1 transition-transform hover:translate-x-1">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium">TOEIC 690 (Listening and reading)</p>
                      <p className="text-sm text-gray-500">12-2022</p>
                    </div>
                  </div>
                  <div className="space-y-1 transition-transform hover:translate-x-1">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium">Certificate of completion for the Golang Basic course</p>
                      <p className="text-sm text-gray-500">9-2023</p>
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
            <AnimatedCard>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase size={20} className="transition-transform hover:rotate-12" />
                  Work Experience
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Current Job */}
                <AnimatedSection delay={100} direction="right">
                  <div className="space-y-3">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                      <h3 className="font-bold text-lg">BACK-END DEVELOPER</h3>
                      <Badge variant="outline" className="w-fit mt-1 sm:mt-0 animate-pulse" style={{ animationDuration: "4s" }}>
                        6/2024 - present
                      </Badge>
                    </div>
                    <p className="font-medium">TEL4VN Company</p>
                    <div>
                      <p className="font-medium text-sm">Project: Quality Control Bot</p>
                      <p className="font-medium text-sm mt-2">Missions:</p>
                      <ul className="list-disc pl-5 mt-1 space-y-1 text-sm">
                        <li className="transition-transform hover:translate-x-1">Develop and maintain a microservice-based system for evaluating call quality.</li>
                        <li className="transition-transform hover:translate-x-1">
                          Write APIs for analyzing audio transcripts, scoring criteria, and managing QC-related
                          configurations.
                        </li>
                        <li className="transition-transform hover:translate-x-1">Implement real-time processing with RabbitMQ and Redis for message queuing and caching.</li>
                      </ul>
                      <p className="font-medium text-sm mt-2">Technologies:</p>
                      <ul className="list-disc pl-5 mt-1 space-y-1 text-sm">
                        <li className="transition-transform hover:translate-x-1">Golang - with Gin Framework</li>
                        <li className="transition-transform hover:translate-x-1">ORM: Bun ORM</li>
                        <li className="transition-transform hover:translate-x-1">Database: PostgreSQL, Elasticsearch</li>
                        <li className="transition-transform hover:translate-x-1">Messaging Queue: RabbitMQ</li>
                        <li className="transition-transform hover:translate-x-1">Caching: Redis</li>
                        <li className="transition-transform hover:translate-x-1">Architecture: Microservices</li>
                      </ul>
                    </div>
                  </div>
                </AnimatedSection>

                <Separator className="animate-pulse" style={{ animationDuration: "5s" }} />

                {/* Previous Job */}
                <AnimatedSection delay={200} direction="right">
                  <div className="space-y-3">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                      <h3 className="font-bold text-lg">BACK-END DEVELOPER</h3>
                      <Badge variant="outline" className="w-fit mt-1 sm:mt-0">
                        8/2022 - 6/2024
                      </Badge>
                    </div>
                    <p className="font-medium">VOYAGER INC</p>

                    {/* Project 1 */}
                    <div>
                      <p className="font-medium text-sm">Project: SAAS backend company management (6/2023 - 6/2024)</p>
                      <p className="font-medium text-sm mt-2">Missions: Write APIs for employee shift management project</p>
                      <ul className="list-disc pl-5 mt-1 space-y-1 text-sm">
                        <li className="transition-transform hover:translate-x-1">Technologies: Golang - with fiber Framework</li>
                        <li className="transition-transform hover:translate-x-1">ORM: Gorm, gorm.io</li>
                        <li className="transition-transform hover:translate-x-1">PaaS: Google Cloud Platform (Cloud run, Cloud SQL)</li>
                        <li className="transition-transform hover:translate-x-1">CI/CD: GitHub Action</li>
                        <li className="transition-transform hover:translate-x-1">Database: PostgreSQL</li>
                        <li className="transition-transform hover:translate-x-1">API Method: restAPI (with openAPI and oapi-generator)</li>
                      </ul>
                      <p className="font-medium text-sm mt-2">Duties:</p>
                      <ul className="list-disc pl-5 mt-1 space-y-1 text-sm">
                        <li className="transition-transform hover:translate-x-1">Apply Clean Architecture software structure</li>
                        <li className="transition-transform hover:translate-x-1">Write unit test (Table-driven tests)</li>
                        <li className="transition-transform hover:translate-x-1">Practical knowledge of Google Cloud Platform deployment</li>
                        <li className="transition-transform hover:translate-x-1">How to write code clean, logical and scalability.</li>
                        <li className="transition-transform hover:translate-x-1">Daily direct communication with customers in English</li>
                        <li className="transition-transform hover:translate-x-1">Documented test results and worked on bug fixes to improve system stability.</li>
                      </ul>
                    </div>

                    {/* Project 2 */}
                    <div className="mt-4">
                      <p className="font-medium text-sm">Project: Golang Clean Architecture (1/2023 - 6/2023)</p>
                      <p className="font-medium text-sm mt-2">
                        Missions: Proficient in Golang programming, data structures, algorithms, and concurrency concepts.
                      </p>
                      <ul className="list-disc pl-5 mt-1 space-y-1 text-sm">
                        <li className="transition-transform hover:translate-x-1">Technologies: Golang - with fiber Framework</li>
                        <li className="transition-transform hover:translate-x-1">ORM: Gorm, gorm.io</li>
                        <li className="transition-transform hover:translate-x-1">API Method: restAPI</li>
                      </ul>
                      <p className="font-medium text-sm mt-2">Duties:</p>
                      <ul className="list-disc pl-5 mt-1 space-y-1 text-sm">
                        <li className="transition-transform hover:translate-x-1">Build well-structured RESTful APIs using Golang frameworks like Fiber.</li>
                        <li className="transition-transform hover:translate-x-1">Implement secure user authentication with JWT in Golang applications.</li>
                        <li className="transition-transform hover:translate-x-1">Employed Docker for containerization.</li>
                        <li className="transition-transform hover:translate-x-1">Write clean, logical, and scalable code following Golang development best practices.</li>
                      </ul>
                    </div>

                    {/* Project 3 */}
                    <div className="mt-4">
                      <p className="font-medium text-sm">Project: Nursing Home Management System (8/2022 - 1/2023)</p>
                      <p className="font-medium text-sm mt-2">Missions: Maintained and developed a web-based system.</p>
                      <p className="font-medium text-sm mt-2">Technologies:</p>
                      <ul className="list-disc pl-5 mt-1 space-y-1 text-sm">
                        <li className="transition-transform hover:translate-x-1">BE: PHP Laravel (Laravel 8)</li>
                        <li className="transition-transform hover:translate-x-1">FE: VueJS (Vue2), TailwindCSS</li>
                      </ul>
                      <p className="font-medium text-sm mt-2">Knowledge:</p>
                      <ul className="list-disc pl-5 mt-1 space-y-1 text-sm">
                        <li className="transition-transform hover:translate-x-1">Understanding Axios and Promise usage in VueJS</li>
                        <li className="transition-transform hover:translate-x-1">UI design implementation based on provided designs</li>
                        <li className="transition-transform hover:translate-x-1">Understanding how to make websites responsive for different screen sizes</li>
                        <li className="transition-transform hover:translate-x-1">Quickly identify and resolve system errors</li>
                      </ul>
                    </div>
                  </div>
                </AnimatedSection>
              </CardContent>
            </AnimatedCard>
          </AnimatedSection>

          {/* Additional Skills Section */}
          <AnimatedSection delay={300} direction="right">
            <AnimatedCard>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code size={20} className="transition-transform hover:rotate-12" />
                  Additional Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  In addition to the mentioned above projects, I have also worked on several small personal projects and
                  gained additional skills through assisting with other projects. These include:
                </p>
                <ul className="list-disc pl-5 mt-3 space-y-1 text-sm">
                  <li className="transition-transform hover:translate-x-1">Experience with Node.js (Express.js framework)</li>
                  <li className="transition-transform hover:translate-x-1">Knowledge of NoSQL databases</li>
                  <li className="transition-transform hover:translate-x-1">
                    Experience using WebSockets (Pusher) for real-time communication between client and server in a mini
                    Facebook-clone project.
                  </li>
                </ul>
              </CardContent>
            </AnimatedCard>
          </AnimatedSection>

          {/* Activities Section */}
          <AnimatedSection delay={400} direction="right">
            <AnimatedCard>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart size={20} className="text-red-500 animate-pulse" style={{ animationDuration: "2s" }} />
                  Activities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                    <h3 className="font-bold">MEMBER OF BACH KHOA SOCIAL GROUP</h3>
                    <Badge variant="outline" className="w-fit mt-1 sm:mt-0">
                      2020-2023
                    </Badge>
                  </div>
                  <p className="font-medium text-sm">Participated in Social Activities</p>
                  <ul className="list-disc pl-5 mt-1 space-y-1 text-sm">
                    <li className="transition-transform hover:translate-x-1">Take part in activities to help children in orphanages.</li>
                  </ul>
                </div>
              </CardContent>
            </AnimatedCard>
          </AnimatedSection>

          {/* Additional Information Section */}
          <AnimatedSection delay={500} direction="right">
            <AnimatedCard>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Info size={20} className="transition-transform hover:rotate-12" />
                  Additional Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li className="transition-transform hover:translate-x-1">
                    High responsibility, can work under pressure, ready for field service in all nationwide, eager to
                    learn.
                  </li>
                  <li className="transition-transform hover:translate-x-1">Good at Teamwork skills.</li>
                  <li className="transition-transform hover:translate-x-1">Comprehension of English documents.</li>
                  <li className="transition-transform hover:translate-x-1">Can control and manage time on project.</li>
                </ul>
              </CardContent>
            </AnimatedCard>
          </AnimatedSection>
        </div>
      </main>

      <footer className="bg-gray-800 text-white dark:bg-gray-900 py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">© {new Date().getFullYear()} Nha Le Thanh. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-4">
            <Link href="mailto:thanhnha141001@gmail.com" className="hover:text-gray-300 transition-transform hover:scale-110">
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
            <Link href="tel:0346783250" className="hover:text-gray-300 transition-transform hover:scale-110">
              <Phone size={18} />
              <span className="sr-only">Phone</span>
            </Link>
          </div>
        </div>
      </footer>
      <FloatingDownloadButton />
    </div>
  )
}
