// an array of objects for projects
// add projects to the top of the array
export const projects: {id: number, title: string, dates: string, github?: string, points: string[]}[] = [
    {
        "id" : 2,
        "title" : "Personal Website",
        "dates" : "April 2025",
        "github" : "https://github.com/tjessica13/personal-website",
        "points" : ["Created a personal website using next js, typescript, html, css, and tailwind css."]
    },
    {
        "id" : 1,
        "title" : "Pompoko",
        "dates" : "September - December 2024",
        "github" : "https://github.com/tjessica13/pompoko",
        "points" : ["Pokemon Pomodoro website to help with time management for studying."]
    },
    {
        "id" : 0,
        "title" : "Taylor Swift Friendship Bracelet Website",
        "dates" : "August 2024",
        "github" : "https://github.com/tjessica13/ts-bracelets",
        "points" : ["A website for filtering Taylor Swift song titles for making friendship bracelets."]
    }
]