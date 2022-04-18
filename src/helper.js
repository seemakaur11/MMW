// All images fetchec
export const fetchData = async () => {
    try{
        const response = await fetch('https://makemywebsiteaustralia.com.au/mmw/wp-json/mo/v1/images/attachment')
         const json = await response.json();
         return json;

    }
    catch(error){
        console.log("error ==>",error)
    }
}

// All content
export const contentData = async() => {
    try{
        const response = await fetch('https://makemywebsiteaustralia.com.au/mmw/wp-json/mo/v1/content/27')
         const json = await response.json();
         return json;
    }
    catch(error){
        console.log("error ==>",error)
    }
}