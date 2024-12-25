var videos = document.getElementsByClassName("videos")[0]
var index = 0
const videos_info = [
    {
        title: "How to Learn JavaScript in 2023",
        channel_name: "Programming Guru",
        link: "https://www.youtube.com/watch?v=abcd1234",
        thumbnail: "./images.jfif"
    },
    {
        title: "Top 10 JavaScript Frameworks",
        channel_name: "Tech Talk",
        link: "https://www.youtube.com/watch?v=efgh5678",
        thumbnail: "./images.jfif"
    },
    {
        title: "Understanding Asynchronous JavaScript",
        channel_name: "Code Academy",
        link: "https://www.youtube.com/watch?v=ijkl9101",
        thumbnail: "./images.jfif"
    },
    {
        title: "CSS Grid Tutorial",
        channel_name: "Web Design Mastery",
        link: "https://www.youtube.com/watch?v=mnop2345",
        thumbnail: "./images.jfif"
    },
    {
        title: "React vs Vue: Which is Better?",
        channel_name: "Frontend Focus",
        link: "https://www.youtube.com/watch?v=qrst6789",
        thumbnail: "./images.jfif"
    },
    {
        title: "Introduction to Node.js",
        channel_name: "Backend Basics",
        link: "https://www.youtube.com/watch?v=uvwx0123",
        thumbnail: "./images.jfif"
    },
    {
        title: "Building REST APIs with Express",
        channel_name: "API Master",
        link: "https://www.youtube.com/watch?v=yzab4567",
        thumbnail: "./images.jfif"
    },
    {
        title: "JavaScript ES6 Features",
        channel_name: "Modern JS",
        link: "https://www.youtube.com/watch?v=cdef8901",
        thumbnail: "./images.jfif"
    },
    {
        title: "Web Accessibility Best Practices",
        channel_name: "Inclusive Design",
        link: "https://www.youtube.com/watch?v=ghij2345",
        thumbnail: "./images.jfif"
    },
    {
        title: "Understanding Git and GitHub",
        channel_name: "Version Control Pro",
        link: "https://www.youtube.com/watch?v=klmn6789",
        thumbnail: "./images.jfif"
    },
    // Add more unique video objects here...
    {
        title: "Mastering Python for Data Science",
        channel_name: "Data Science Academy",
        link: "https://www.youtube.com/watch?v=xyz12345",
        thumbnail: "./images.jfif"
    },
    {
        title: "10 Tips for Effective Web Development",
        channel_name: "Web Dev Tips",
        link: "https://www.youtube.com/watch?v=abcde6789",
        thumbnail: "./images.jfif"
    },
    {
        title: "Exploring the World of AI",
        channel_name: "AI Insights",
        link: "https://www.youtube.com/watch?v=efgh0123",
        thumbnail: "./images.jfif"
    },
    {
        title: "Understanding Blockchain Technology",
        channel_name: "Crypto Academy",
        link: "https://www.youtube.com/watch?v=ijkl4567",
        thumbnail: "./images.jfif"
    },
    {
        title: "Creating Stunning Graphics with Canva",
        channel_name: "Design Pro",
        link: "https://www.youtube.com/watch?v=mnop8901",
        thumbnail: "./images.jfif"
    },
    {
        title: "The Future of Web Development",
        channel_name: "Tech Trends",
        link: "https://www.youtube.com/watch?v=pqrs2345",
        thumbnail: "https://i.ytimg.com"
    }
]


var listOfVideos = [] ;
async function getVideos() {
    const yt_videos = await fetch("https://dummyjson.com/products")
    const data = await yt_videos.json()
    data.products.forEach(element => {
        listOfVideos.push(element)
        
    });
    while (index<videos_info.length) {
        const thumbnail = document.createElement("img")
        const title = document.createElement("h1")
        const channel_name = document.createElement("span")
        const price = document.createElement("price")
        const video_card = document.createElement("div")
        const click_link = document.createElement("a")
    
        video_card.className = "video-card col-flex"
        video_card.style = "border: 1px solid black; width: 350px; padding: 10px; margin: 8px;"
        // thumbnail.style = "width: 300px;"
        price.innerHTML = listOfVideos[index].price
        thumbnail.src = listOfVideos[index].thumbnail
        title.innerHTML = listOfVideos[index].title
        channel_name.textContent = listOfVideos[index].brand
        video_card.appendChild(thumbnail)
        video_card.appendChild(title)
        video_card.appendChild(channel_name)
        click_link.appendChild(video_card)
        videos.appendChild(click_link)
        // title.textContent = videos_info[index].title
    
        index++
    }
}

getVideos()

console.log(listOfVideos );





