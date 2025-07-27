
     import React from 'react'
     import Applayout from './pages/Applayout'
     import Homepage from './pages/Homepage'
     import Menu from './pages/Menu'
     import Branches from './pages/Branches'
     import Contact from './pages/Contact'
     import { useState } from 'react'
     import { useEffect } from 'react'
     
     import { createBrowserRouter, RouterProvider } from 'react-router-dom'
     

     
     export default function App() {

  const [meals, setMeals] = useState([]);
      useEffect(() => {
 fetch('/api/api/')
    .then(async res => {
      const contentType = res.headers.get("content-type");

      if (contentType && contentType.includes("application/json")) {
        const data = await res.json();
        setMeals(data);
      } else {
        const text = await res.text();
        console.error("الرد مش JSON، هو:", text);
      }
    })
    .catch(err => console.error("Fetch error:", err.message));
}, []);

   
// fetch('/api/api/')
//   .then((res) => {
//     if (res) {
//      return res.json()
 
//     }
    
   
//   })
//   .then((data) => {console.log(data)
   
//   })
//   .catch((err) => {
//     console.error("Fetch error:", err.message);
//   });
 

  


  // [] means this runs once on mount

  


  // fetch('/api/api/')
  //     .then(response =>{
  //       if(response) 
  //         return response.json()
      
    
        
  //     })
      
  //       //   throw new Error('Network response was not ok');
         
        
         
      
  //     .then(dataa => {
        
        
  //         localStorage.setItem("savedItems", JSON.stringify(dataa)); 
  
        
  //        // store data in state
      
  //     })
      
      // .catch(error => {
      //   console.error('Fetch error:', error);
      // });
  

 
        
        
        
     
        
        

       const Routing = createBrowserRouter(
        

            [




                {path: "/", element: <Applayout />, children :[
                

                {
                    path: "", element: <Homepage/>
                },
                  {path:"menu", element: <Menu/>

                },
                {path:"branches",element:<Branches/>},
                {
                    path:"contact",element:<Contact/>
                },
              


                
            ]
               
            }
                
          
              
            
                            

                 
            ])


       
        
 
        
        
return (
    <div>
        
            
        <RouterProvider router={Routing} />
        
       
       

  
   
   </div>


)}
     
