import React from 'react'
import{useEffect} from 'react'
import axios from 'axios'

const HM_Home = () => {

    async function getData(){
        try {
            let res = await axios({
                method:"get",
                url:"https://fakestoreapi.com/products",

            });
            let data = res
            console.log(data);
        } catch (error) {
            console.log(error)
            
        }
    }


    useEffect(()=>{
        getData()
    },[]);

  return (
    <div id='MainBody'>
        <img src="" alt="" />
    </div>
  )
}

export default HM_Home