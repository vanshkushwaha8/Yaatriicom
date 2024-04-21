export const navigation = {
    categories: [
        
        {
          id: "explore",
          name: "Explore",
          featured: [
            
          ],
          sections: [
            {
              id: "tours",
              name: "Tours",
              items: [
                { id:"adventure-tours", name: "Adventure Tours", href: "/" },
                { id:"heritage-tours", name: "Heritage Tours", href: "/" },
                { id:"hill-station-tours", name: "Hill Station Tours", href: "/" },
                { id:"wildlife-tours", name: "Wildlife Tours", href: "/" },
                { id:"pilgrimage-tours", name: "Pilgrimage Tours", href: "/" },
              ],
            },
            {
              id: "guides",
              name: "Tour Guides",
              items: [
                { id:"adventure-tour-guides", name: "Adventure Tour Guide", href: "/" },
                { id:"heritage-tour-guides", name: "Heritage Tour Guide", href: "/" },
                { id:"hill-station-tour-guides", name: "Hill Station Tour Guide", href: "/" },
                { id:"wildlife-tour-guides", name: "Wildlife Tour Guide", href: "/" },
                { id:"pilgrimage-tour-guides", name: "Pilgrimage Tour Guide", href: "/" },
                
              ],
            },
          ],
        },
      ],
      pages: [
        { name: "About", href: "/About" },
        { name: "Services", href: "/ContactApp" },
        // { name: "SignIn", href:"/"}

      ],
}