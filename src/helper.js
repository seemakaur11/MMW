// All images fetchec
export const fetchData = async () => {
    try {
        const response = await fetch('https://makemywebsiteaustralia.com.au/mmw/wp-json/mo/v1/images/attachment')
        const json = await response.json();
        return json;

    }
    catch (error) {
        console.log("error ==>", error)
    }
}

// All content
export const contentData = async () => {
    try {
        const response = await fetch('https://makemywebsiteaustralia.com.au/mmw/wp-json/mo/v1/content/27')
        const json = await response.json();
        return json;
    }
    catch (error) {
        console.log("error ==>", error)
    }
}
///casestudy data
export const caseStudyData = async () => {
    try {
        const response = await fetch('https://makemywebsiteaustralia.com.au/mmw/wp-json/wp/v2/casestudy')
        const json = await response.json();
        return json;
    }
    catch (error) {
        console.log("error ==>", error)
    }
}
export const testimonials = async () => {
    var array = [];
    try {
        const response = await fetch(
            "https://makemywebsiteaustralia.com.au/mmw/wp-json/wp/v2/testimonials"
        );
        const json = await response.json();
        return json
        // json.forEach((key, value) => {
        //     array.push({
        //         id: key.id,
        //         title: key.title,
        //         content: key.content,
        //     });
        //    array.map((id) =>{
        //    })
        // });
      
        
        //     console.log("JSON=======>",json)
    } catch (error) {
        console.log("error ==>", error);
    }



}