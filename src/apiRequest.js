

const apiRequest = async(url='',optionObject=null, err =null) => {
    try{
        const  res = await fetch(url,optionObject);

        if(!res) throw Error ("please reload the page");

        
    }catch (err){
        console.log(err);
    return null;
    }
}

export default apiRequest