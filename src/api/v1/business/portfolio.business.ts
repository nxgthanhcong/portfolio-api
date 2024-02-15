const portfolioBusiness = () => {
  return {
    getCurrentJobInfomation: () => {
      return {
        role: "Software Engineer",
        company: "Fpt Telecom",
        description:
          "I build modules & web application meet the complex business requirements, high fault tolerance, manipulate large data.",
      };
    },
    getAboutInfomation: () => {
      return {
        content: `
        <p className="mb-4 text-xl text-slate-400">
        Graduated at 2021, I decided to try my hand at creating custom
        <span className="text-slate-200">Tumblr</span>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </p>
      <p className="mb-4 text-xl text-slate-400">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
        <span className="text-slate-200">Spotify API</span>.
      </p>
      <p className="mb-4 text-xl text-slate-400">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley.
        <span className="text-slate-200">Korok seeds</span>.
      </p>
        `,
      };
    },
    getExperiences() {
      return [
        {
          startDate: "Mar 2022",
          endDate: "Present",
          position: "1Backend developer",
          company: "FptTelecom",
          description:
            "Deliver high-quality modules, application meet the complex business requirements, highability for handle failure. Write own library for fasting code, handle all security context. Build strong logging applications for tracking business steps",
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
              title: "Reactjs",
            },
          ],
        },
        {
          startDate: "Mar",
          endDate: "July 2021",
          position: "Intern",
          company: "TopOnTech",
          description:
            "Maintain ERP system & other outsourcing projects, build cronjob crawl web data",
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
          startDate: "Dec 2021",
          endDate: "Mar 2022",
          position: "Lastyear student",
          company: "Home",
          description:
            "Build somes portfolio project for practicing css skill, learning more about reponsive, apply code struct for ReactJs projects, using CssModule,...",
          tags: [
            {
              title: "Html",
            },
            {
              title: "Css",
            },
            {
              title: "Js",
            },
            {
              title: "ReactJs",
            },
          ],
        },

        {
          startDate: "July",
          endDate: "Dec 2021",
          position: "Lastyear student",
          company: "Home",
          description:
            "Making Ecomerce graduation thesis application, combining multiple tech stack. Learning researching new technologies and apply to the project. Working with third api party",
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
          tags: [
            {
              title: "Asp.netcore",
            },
            {
              title: "SqlServer",
            },
            {
              title: "Reactjs",
            },
            {
              title: "Docker",
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
