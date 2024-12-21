
const GetProjects = async () => {
    try{
        response = await fetch('https://6761a6ac46efb37323728020.mockapi.io/list_projects',{
                method:'GET',
            }
        )
        return response
    } catch(err) {
        console.log(err)
    }
}

export default GetProjects