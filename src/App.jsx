
     import React from 'react'
     import Applayout from './pages/Applayout'
     import Homepage from './pages/Homepage'
     import Menu from './pages/Menu'
     import Branches from './pages/Branches'
     import Contact from './pages/Contact'
     
     
     
     
     import { createBrowserRouter, RouterProvider } from 'react-router-dom'
     

     
     export default function App() {

 


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
     
