const portfolioBusiness = () => {
  return {
    getCurrentJobInfomation: () => {
      return {
        role: "Software Engineer",
        company: "FptTelecom",
        description:
          "As a backend developer, I architect robust and secure systems that power seamless, ensuring every interaction is not only right-perfect but also responsive, and protected against potential threats.",
      };
    },
    // <span className="text-slate-200">Tumblr</span>
    getAboutInfomation: () => {
      return {
        content: `
        <p className="mb-4 text-xl text-slate-400">
          In late 2021 internship at <span className="text-slate-200">TopOnTech</span>, I developed crucial problem-solving skills, learning to visualize implementation steps. Additionally, I improved my ability to read technical English documentation, enhancing my overall proficiency.
        </p>
      <p className="mb-4 text-xl text-slate-400">
      Upon returning to complete my project and graduate from university, I commenced working at <span className="text-slate-200">FPTTelecom</span> in early 2022. Here, I focused on developing integrated modules for the internal system, seamlessly bridging interfaces, API services, and database operations. Directly engaging with users, I meticulously planned my processes, prioritizing ease of maintenance, scalability, and skill enhancement in writing SQL queries. My role involved working across various layers of the system, ensuring a smooth flow from frontend to backend functionalities.
      </p>
      <p className="mb-4 text-xl text-slate-400">
      At the end of 2023, I decided to temporarily pause my journey at <span className="text-slate-200">FPTTelecom</span> and embarked on a quest to seek out a new environment where I could broaden my horizons and expand my knowledge base. By venturing beyond the familiar confines of my current workplace, I hoped to engage with new challenges and experiences.
      </p>
        `,
      };
    },
    getExperiences() {
      return [
        // {
        //   startDate: "Nov 2023",
        //   endDate: "Present",
        //   position: "Software Engineer",
        //   company: "VietCredit",
        //   description: "sample desciption",
        //   tags: [
        //     {
        //       title: "Asp.net framework",
        //     },
        //     {
        //       title: "Asp.netcore",
        //     },
        //     {
        //       title: "SqlServer",
        //     },
        //     {
        //       title: "JQuery",
        //     },
        //     {
        //       title: "Html",
        //     },
        //     {
        //       title: "Css",
        //     },
        //     {
        //       title: "Reactjs",
        //     },
        //   ],
        // },
        {
          startDate: "Mar 2022",
          endDate: "Present",
          position: "Backend developer",
          company: "FptTelecom",
          description:
            "I focused on developing integrated modules for the internal system, seamlessly bridging interfaces, API services, and database operations. Directly engaging with users, I meticulously planned my processes, prioritizing ease of maintenance, scalability. My role involved working across various layers of the system, ensuring a smooth flow from frontend to backend functionalities.",
          tags: [
            {
              title: "Asp.net framework",
            },
            {
              title: "Asp.netcore",
            },
            {
              title: "SqlServer",
            },
            {
              title: "JQuery",
            },
            {
              title: "Html",
            },
            {
              title: "Css",
            },
            {
              title: "Javascript",
            },
            {
              title: "Reactjs",
            },
          ],
          links: [
            {
              title: "MusicKit.js",
              icon: `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-3 w-3" aria-hidden="true"><path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"></path><path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"></path></svg>
                `,
            },
            {
              title: "9to5Mac",
              icon: `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-3 w-3" aria-hidden="true"><path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"></path><path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"></path></svg>
                `,
            },
          ],
        },
        {
          startDate: "Mar",
          endDate: "July 2021",
          position: "Intern",
          company: "TopOnTech",
          description:
            "I maintain our ERP system and oversee outsourcing projects. I ensure system stability and efficiency while addressing issues. Specializing in cronjobs, I gather web data for insights. Actively researching new tech.",
          tags: [
            {
              title: "Asp.net",
            },
            {
              title: "Asp.netcore",
            },
            {
              title: "SqlServer",
            },
          ],
        },
      ];
    },
    getProjects(page: number, limit: number) {
      return [
        {
          year: 2022,
          imgUrl: "./assets/images/spotify.webp",
          title: "UI Engineer Co-op",
          madeAt: "Fpt Telecom",
          href: "/",
          description:
            "When I’m not at the computer, I’m usually rock climbing, hanging out with my wife and two cats, or running around Hyrule searching for Korok seeds K o r o k s e e d s .",
          links: [
            {
              icon: `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="mr-1 h-4 w-4" aria-hidden="true"><path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z"></path><path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z"></path></svg>
                `,
              title: "200+ Installs",
            },
          ],
        },
        {
          year: 2022,
          imgUrl: "./assets/images/spotify-profile.webp",
          title: "UI Engineer Co-op",
          madeAt: "Fpt Telecom",
          href: "/",
          description:
            "When I’m not at the computer, I’m usually rock climbing, hanging out with my wife and two cats, or running around Hyrule searching for Korok seeds K o r o k s e e d s .",
          links: [
            {
              icon: `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="mr-1 h-3 w-3" aria-hidden="true"><path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd"></path></svg>
                `,
              title: "200",
            },
            {
              icon: `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="mr-1 h-4 w-4" aria-hidden="true"><path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z"></path><path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z"></path></svg>
                `,
              title: "200+ Installs",
            },
          ],
          tags: [
            {
              title: "Asp.net",
            },
            {
              title: "Asp.netcore",
            },
            {
              title: "SqlServer",
            },
          ],
        },
        {
          year: 2022,
          imgUrl: "./assets/images/halcyon.webp",
          title: "UI Engineer Co-op",
          madeAt: "Fpt Telecom",
          href: "/",
          description:
            "When I’m not at the computer, I’m usually rock climbing, hanging out with my wife and abc.",
          tags: [
            {
              title: "Asp.net",
            },
            {
              title: "Asp.netcore",
            },
            {
              title: "SqlServer",
            },
          ],
        },
      ];
    },
    getBlogs(page: number, limit: number) {
      return [
        {
          href: "/",
          imgUrl: "./assets/images/spotify.webp",
          createDate: "Jan 2023",
          title: "Integrating AngolaSearch with WordPress Multisite",
        },
        {
          href: "/",
          imgUrl: "./assets/images/spotify.webp",
          createDate: "Jan 2023",
          title: "Integrating AngolaSearch with WordPress Multisite",
        },
        {
          href: "/",
          imgUrl: "./assets/images/spotify.webp",
          createDate: "Jan 2023",
          title: "Integrating AngolaSearch with WordPress Multisite",
        },
      ];
    },
  };
};

export default portfolioBusiness();
