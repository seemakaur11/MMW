// useEffect(() => {
//     async function Images() {
//         try {
//             const response = await fetch('https://makemywebsiteaustralia.com.au/mmw/wp-json/mo/v1/images/attachment')
//             const json = await response.json();
//             console.log("JSON ====>", json)
//            return setState(json)
//         }
//         catch (error) {
//             console.log(" error ---->", error)
//         }
//     }
//     Images()
// }, [])


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